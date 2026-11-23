import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
const entry = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
copyFileSync(entry, join(outDir, "entry.txt"));
console.log("wrote entry.txt");
