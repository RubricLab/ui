import { rm, rename, readdir } from "node:fs/promises";
import path from "node:path";

const distDir = "./dist";

// Clean dist directory before building
await rm(distDir, {
  recursive: true,
  force: true,
});

try {

  // Run build
  await Bun.build({
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    minify: true,
    external: ["react", "react-dom"],
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}

// Rename the generated CSS file to index.css
const files = await readdir(distDir);
const cssFile = files.find((file) => file.endsWith(".css"));
if (cssFile) {
  const oldPath = path.join(distDir, cssFile);
  const newPath = path.join(distDir, "index.css");
  await rename(oldPath, newPath);
}