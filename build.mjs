import dts from "bun-plugin-dts";
import { rm, rename, readdir } from "node:fs/promises";
import path from "node:path";
import fs from "node:fs";

const distDir = "./dist";

// Clean dist directory before building
await rm(distDir, {
  recursive: true,
  force: true,
});

// Run build
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  minify: true,
  plugins: [dts()],
  external: ["react", "react-dom"],
});

// Rename the generated CSS file to index.css
const files = await readdir(distDir);
const cssFile = files.find((file) => file.endsWith(".css"));
if (cssFile) {
  const oldPath = path.join(distDir, cssFile);
  const newPath = path.join(distDir, "index.css");
  await rename(oldPath, newPath);
}

// replace jsx-dev-runtime with jsx-runtime
const bundleFile = fs.readFileSync(path.join(distDir, "index.js"), "utf-8");
const fixedBundle = bundleFile.replace(/react\/jsx-dev-runtime/g, 'react/jsx-runtime').replace(/jsxDEV/g, 'jsx');
await fs.promises.writeFile(path.join(distDir, "index.js"), fixedBundle);
