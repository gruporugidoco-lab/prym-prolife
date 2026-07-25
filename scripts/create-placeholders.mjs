import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const MINIMAL_JPEG_BASE64 =
  "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9MKKKK5zUKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==";
const MINIMAL_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR42mP8z8AABQMBgBqN6lQAAAAASUVORK5CYII=";

const imagesDir = join(process.cwd(), "public", "images");

const imageFiles = [
  "hero.jpg",
  "idoso-casal.jpg",
  "psicoterapia.jpg",
  "massoterapia.jpg",
  "yoga.jpg",
  "mente-ativa.jpg",
  "acompanhamento-emocional.jpg",
  "equipe.jpg",
  "depoimento1.jpg",
  "depoimento2.jpg",
  "clinica-1.jpg",
  "clinica-2.jpg",
  "clinica-3.jpg",
  "clinica-4.jpg",
  "clinica-5.jpg",
  "clinica-6.jpg",
  "pilares-prym.png",
  "logo-prolife.jpg",
];

mkdirSync(imagesDir, { recursive: true });

const jpegBuffer = Buffer.from(MINIMAL_JPEG_BASE64, "base64");
const pngBuffer = Buffer.from(MINIMAL_PNG_BASE64, "base64");

for (const file of imageFiles) {
  const dest = join(imagesDir, file);
  if (file.endsWith(".png")) {
    writeFileSync(dest, pngBuffer);
  } else {
    writeFileSync(dest, jpegBuffer);
  }
}

writeFileSync(
  join(imagesDir, "README.md"),
  `# Imagens PRYM 60+

Substitua os arquivos placeholder mantendo os mesmos nomes:

| Arquivo | Uso |
|---------|-----|
| hero.jpg | Hero principal |
| idoso-casal.jpg | Diagrama holístico / casal |
| psicoterapia.jpg | Neuropsicopedagogia |
| massoterapia.jpg | Massoterapia terapêutica |
| yoga.jpg | Yoga adaptada |
| mente-ativa.jpg | Oficina Mente Ativa |
| acompanhamento-emocional.jpg | Acompanhamento emocional |
| equipe.jpg | Equipe multidisciplinar |
| depoimento1.jpg | Depoimento 1 |
| depoimento2.jpg | Depoimento 2 |
| clinica-1.jpg a clinica-6.jpg | Galeria da clínica |
| logo-prolife.jpg | Logo ProLife |

Recomendação: JPG/WebP otimizados, mínimo 1200px na maior dimensão.
`
);

console.log(`Created ${imageFiles.length} placeholder images in public/images/`);
