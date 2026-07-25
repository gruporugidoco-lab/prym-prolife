"""Remove outer white background and inner scene behind the couple (Option B)."""

from __future__ import annotations

import io
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parents[1]
SOURCE_WHITE = Path(
    r"C:\Users\Bruno Nunes\.cursor\projects\c-Users-Bruno-Nunes-Desktop-PRYM\assets"
    r"\c__Users_Bruno_Nunes_AppData_Roaming_Cursor_User_workspaceStorage_f273db34e302a4bdd06749cad173dbbd_images_"
    r"ChatGPT_Image_22_de_jul._de_2026__11_26_23-89f674a6-a09a-4563-b22e-3807f06d08c3.png"
)
SIXTH_ICON_SOURCE = Path(
    r"C:\Users\Bruno Nunes\.cursor\projects\c-Users-Bruno-Nunes-Desktop-PRYM\assets"
    r"\c__Users_Bruno_Nunes_AppData_Roaming_Cursor_User_workspaceStorage_f273db34e302a4bdd06749cad173dbbd_images_"
    r"pilares-prym-dd8702bd-efa4-4488-ae92-9a406d7714d8.png"
)
OUTPUT = ROOT / "public" / "images" / "pilares-prym-transparent.png"
OUTPUT_COPY = ROOT / "public" / "images" / "pilares-prym.png"
TARGET_SIZE = (1402, 1122)

SESSION = new_session("u2net")


def center_ellipse_box(size: tuple[int, int], scale: float = 0.56) -> tuple[int, int, int, int]:
    w, h = size
    cx, cy = w / 2, h / 2
    rx = w * scale / 2
    ry = h * scale / 2
    return int(cx - rx), int(cy - ry), int(cx + rx), int(cy + ry)


def remove_near_white(image: Image.Image, threshold: int = 242) -> Image.Image:
    rgba = image.convert("RGBA")
    arr = np.array(rgba)
    rgb = arr[:, :, :3]
    white = np.all(rgb >= threshold, axis=2)
    arr[white, 3] = 0
    return Image.fromarray(arr, "RGBA")


def clean_couple_cutout(cutout: Image.Image) -> Image.Image:
    arr = np.array(cutout)
    rgb = arr[:, :, :3].astype(np.int16)
    alpha = arr[:, :, 3].astype(np.float32)

    # Drop obvious room/background tones that rembg sometimes keeps.
    background = (
        (alpha > 0)
        & (rgb[:, :, 0] - rgb[:, :, 2] > 18)
        & (rgb[:, :, 1] - rgb[:, :, 2] > 8)
        & (rgb[:, :, 0] < 215)
    )
    arr[background, 3] = 0

    # Tighten soft halos around hair and shoulders.
    alpha = arr[:, :, 3].astype(np.float32)
    alpha[alpha < 40] = 0
    alpha = np.clip((alpha - 20) * 1.15, 0, 255)
    arr[:, :, 3] = alpha.astype(np.uint8)
    return Image.fromarray(arr, "RGBA")


def rembg_couple(source: Image.Image) -> tuple[Image.Image, tuple[int, int, int, int]]:
    box = center_ellipse_box(source.size, scale=0.58)
    crop = source.crop(box)
    buffer = io.BytesIO()
    crop.save(buffer, format="PNG")
    cutout = Image.open(
        io.BytesIO(
            remove(
                buffer.getvalue(),
                session=SESSION,
                alpha_matting=True,
                alpha_matting_foreground_threshold=240,
                alpha_matting_background_threshold=20,
                alpha_matting_erode_size=10,
            )
        )
    ).convert("RGBA")
    return clean_couple_cutout(cutout), box


def build_option_b(source: Image.Image) -> Image.Image:
    graphic = remove_near_white(source)
    couple, box = rembg_couple(source)
    x0, y0, x1, y1 = box

    # Remove the photographic interior from the graphic layer.
    cleared = np.array(graphic)
    mask = Image.new("L", source.size, 0)
    draw = ImageDraw.Draw(mask)
    cx = (x0 + x1) / 2
    cy = (y0 + y1) / 2
    rx = (x1 - x0) * 0.47
    ry = (y1 - y0) * 0.47
    draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=255)
    fade = np.array(mask.filter(ImageFilter.GaussianBlur(2))).astype(np.float32) / 255.0
    cleared[:, :, 3] = (cleared[:, :, 3] * (1 - fade)).astype(np.uint8)
    base = Image.fromarray(cleared, "RGBA")

    # Inside the portrait area, keep only the recut couple pixels.
    overlay = Image.new("RGBA", source.size, (0, 0, 0, 0))
    overlay.paste(couple, (x0, y0), couple)
    overlay_arr = np.array(overlay)
    inside = fade > 0.05
    base_arr = np.array(base)
    base_arr[inside] = overlay_arr[inside]
    return Image.fromarray(base_arr, "RGBA")


def cleanup_center_artifacts(image: Image.Image) -> Image.Image:
    arr = np.array(image.convert("RGBA"))
    h, w = arr.shape[:2]
    cx, cy = w / 2, h / 2
    radius = min(w, h) * 0.24
    y_idx, x_idx = np.ogrid[:h, :w]
    inside = (x_idx - cx) ** 2 + (y_idx - cy) ** 2 <= radius**2

    rgb = arr[:, :, :3].astype(np.int16)
    warm = (
        inside
        & (arr[:, :, 3] > 0)
        & (rgb[:, :, 0] - rgb[:, :, 2] > 18)
        & (rgb[:, :, 1] - rgb[:, :, 2] > 8)
        & (rgb[:, :, 0] < 215)
    )
    arr[warm, 3] = 0
    return Image.fromarray(arr, "RGBA")


def copy_sixth_icon(result: Image.Image, icon_source: Image.Image) -> Image.Image:
    """Copy the bottom sleep icon + label from the 6-icon reference image."""
    sw, sh = icon_source.size
    tw, th = result.size
    sx = tw / sw
    sy = th / sh

    # Bottom-center badge region in the 6-icon reference.
    src_box = (int(sw * 0.36), int(sh * 0.72), int(sw * 0.64), int(sh * 0.98))
    patch = icon_source.crop(src_box).convert("RGBA")

    # Drop black background from the reference export.
    patch_arr = np.array(patch)
    rgb = patch_arr[:, :, :3].astype(np.int16)
    dark = np.all(rgb <= 28, axis=2)
    patch_arr[dark, 3] = 0
    patch = Image.fromarray(patch_arr, "RGBA")

    target_w = int((src_box[2] - src_box[0]) * sx)
    target_h = int((src_box[3] - src_box[1]) * sy)
    patch = patch.resize((target_w, target_h), Image.Resampling.LANCZOS)

    tx = int(sw * 0.40 * sx)
    ty = int(sh * 0.74 * sy)
    composed = result.copy()
    composed.paste(patch, (tx, ty), patch)
    return composed


def main() -> None:
    if not SOURCE_WHITE.exists():
        raise FileNotFoundError(SOURCE_WHITE)

    source = Image.open(SOURCE_WHITE).convert("RGBA")
    result = build_option_b(source)

    if SIXTH_ICON_SOURCE.exists():
        icon_source = Image.open(SIXTH_ICON_SOURCE).convert("RGBA")
        result = copy_sixth_icon(result, icon_source)

    result = cleanup_center_artifacts(result)
    result = result.resize(TARGET_SIZE, Image.Resampling.LANCZOS)
    result.save(OUTPUT, optimize=True)
    result.save(OUTPUT_COPY, optimize=True)
    print(f"Saved: {OUTPUT}")
    print(f"Size: {result.size}")


if __name__ == "__main__":
    main()
