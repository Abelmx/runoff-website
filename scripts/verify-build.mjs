import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const requiredFiles = [
  "dist/index.html",
  "dist/brand/logo-mark.svg",
  "dist/brand/wordmark.svg",
  "dist/brand/favicon.svg",
  "dist/apple-touch-icon.png",
];

for (const relativePath of requiredFiles) {
  const path = resolve(root, relativePath);
  if (!existsSync(path) || statSync(path).size === 0) {
    throw new Error(`Missing build output: ${relativePath}`);
  }
}

const html = readFileSync(resolve(root, "dist/index.html"), "utf8");
for (const requiredText of ["Use your favorite agent.", "Your code stays", "Compare the work"]) {
  if (!html.includes(requiredText)) throw new Error(`Missing homepage copy: ${requiredText}`);
}

console.log(`Verified ${requiredFiles.length} static assets and core homepage copy.`);
