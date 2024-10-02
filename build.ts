import { rm, rename, readdir } from 'node:fs/promises'
import path from 'node:path'

const outdir = './dist'

// Clean dist directory before building
await rm(outdir, {
	recursive: true,
	force: true
})

try {
	// Run build
	await Bun.build({
		entrypoints: ['./src/index.ts'],
		outdir,
		minify: true,
		external: ['react', 'react-dom']
	})
} catch (error) {
	console.error(error)
	process.exit(1)
}

// Rename the generated CSS file to index.css
const files = await readdir(outdir)
const cssFile = files.find(file => file.endsWith('.css'))
if (cssFile) {
	const oldPath = path.join(outdir, cssFile)
	const newPath = path.join(outdir, 'index.css')
	await rename(oldPath, newPath)
}
