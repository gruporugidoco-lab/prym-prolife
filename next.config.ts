import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

function logDebug(
  hypothesisId: string,
  message: string,
  data: Record<string, unknown>,
) {
  const payload = {
    sessionId: "b241f8",
    runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
    hypothesisId,
    location: "next.config.ts:logDebug",
    message,
    data,
    timestamp: Date.now(),
  };

  // #region agent log
  fs.appendFileSync(
    path.join(projectRoot, "debug-b241f8.log"),
    `${JSON.stringify(payload)}\n`,
  );
  fetch("http://127.0.0.1:7259/ingest/4295cc27-d959-4c87-853b-9d0f2f83f4f6", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "b241f8",
    },
    body: JSON.stringify(payload),
  }).catch(() => {});
  // #endregion
}

const projectRoot = process.cwd();
const nextServerDir = path.join(projectRoot, ".next", "server");
const chunkAtRoot = path.join(nextServerDir, "611.js");
const chunkInChunks = path.join(nextServerDir, "chunks", "611.js");
const pagesDocument = path.join(nextServerDir, "pages", "_document.js");

logDebug("H1", "next config loaded - chunk path probe", {
  chunkAtRootExists: fs.existsSync(chunkAtRoot),
  chunkInChunksExists: fs.existsSync(chunkInChunks),
  pagesDocumentExists: fs.existsSync(pagesDocument),
  nextServerDirExists: fs.existsSync(nextServerDir),
  nodeEnv: process.env.NODE_ENV ?? "undefined",
  argv: process.argv.slice(0, 3),
});

logDebug("H3", "static chunks inventory", {
  staticChunksCount: fs.existsSync(path.join(projectRoot, ".next", "static", "chunks"))
    ? fs.readdirSync(path.join(projectRoot, ".next", "static", "chunks")).length
    : -1,
  buildIdExists: fs.existsSync(path.join(projectRoot, ".next", "BUILD_ID")),
  buildId: fs.existsSync(path.join(projectRoot, ".next", "BUILD_ID"))
    ? fs.readFileSync(path.join(projectRoot, ".next", "BUILD_ID"), "utf8").trim()
    : null,
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;