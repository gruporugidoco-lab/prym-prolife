import fs from "fs";
import path from "path";

const logPath = path.join(process.cwd(), "debug-7a09b0.log");
const packagePath = path.join(process.cwd(), "package.json");

function log(hypothesisId, message, data) {
  const entry = {
    sessionId: "7a09b0",
    runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
    hypothesisId,
    location: "scripts/debug-package-json.mjs",
    message,
    data,
    timestamp: Date.now(),
  };
  fs.appendFileSync(logPath, `${JSON.stringify(entry)}\n`);
}

const hypotheses = {
  H1: "Invalid JSON syntax in package.json",
  H2: "Encoding/BOM or hidden characters break parsing",
  H3: "File missing, empty, or truncated on disk",
  H4: "scripts section has invalid structure for npm task detection",
  H5: "Cursor reads a different package.json than project root",
};

try {
  const exists = fs.existsSync(packagePath);
  const stat = exists ? fs.statSync(packagePath) : null;
  log("H3", "package.json file probe", {
    path: packagePath,
    exists,
    size: stat?.size ?? null,
    isFile: stat?.isFile?.() ?? null,
  });

  const raw = exists ? fs.readFileSync(packagePath) : Buffer.alloc(0);
  log("H2", "raw bytes probe", {
    byteLength: raw.length,
    hasBom: raw.slice(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf])),
    hasNull: raw.includes(0x00),
    startsWithBrace: raw.slice(0, 1).toString("utf8") === "{",
    endsWithBrace: raw.slice(-2).toString("utf8").includes("}"),
  });

  let parsed;
  let parseError = null;
  try {
    parsed = JSON.parse(raw.toString("utf8"));
    log("H1", "JSON.parse succeeded", {
      name: parsed.name,
      version: parsed.version,
      scriptCount: parsed.scripts ? Object.keys(parsed.scripts).length : 0,
    });
  } catch (error) {
    parseError = error instanceof Error ? error.message : String(error);
    log("H1", "JSON.parse failed", { parseError });
  }

  if (parsed?.scripts) {
    const invalidScripts = Object.entries(parsed.scripts).filter(
      ([, value]) => typeof value !== "string",
    );
    log("H4", "scripts validation", {
      scriptNames: Object.keys(parsed.scripts),
      invalidScripts,
      valid: invalidScripts.length === 0,
    });
  } else if (parsed) {
    log("H4", "scripts validation", { valid: false, reason: "missing scripts" });
  }

  const candidates = [
    packagePath,
    path.join(process.cwd(), ".next", "package.json"),
  ].map((candidate) => ({
    candidate,
    exists: fs.existsSync(candidate),
    parseOk: (() => {
      if (!fs.existsSync(candidate)) return false;
      try {
        JSON.parse(fs.readFileSync(candidate, "utf8"));
        return true;
      } catch {
        return false;
      }
    })(),
  }));

  log("H5", "candidate package.json files", { candidates });
  log("SUMMARY", "diagnostic complete", {
    parseOk: parseError === null,
    parseError,
    hypothesisLabels: hypotheses,
  });
} catch (error) {
  log("SUMMARY", "diagnostic crashed", {
    error: error instanceof Error ? error.message : String(error),
  });
  process.exitCode = 1;
}
