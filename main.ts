const fs = require("node:fs");
const path = require("node:path");

const line = "I asked HR for a raise and they handed me a mindfulness poster. Now I stare at it calmly while being underpaid.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
