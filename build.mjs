import { cpSync, mkdirSync, rmSync } from "node:fs";

const outputDir = "dist";
const files = ["index.html", "styles.css", "script.js", "public"];

rmSync(outputDir, { force: true, recursive: true });
mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  cpSync(file, `${outputDir}/${file}`, { recursive: true });
}

console.log("Static production build created in dist/");
