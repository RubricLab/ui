type Path = `${string}.${string}`

function getFilePartsFromPath(path: string) {
	if (!path.match(/^.+\..+$/)) {
		throw new Error('Invalid path format. Expected format: filename.extension')
	}

	const safePath = path as Path

	const pathParts = safePath.split('/')
	const firstPart = pathParts.slice(0, -1).join('/')
	const lastPart = pathParts[pathParts.length - 1]
	const [fileName, extension] = lastPart.split('.')
	return {
		extension,
		fileName,
		location: firstPart,
		path: safePath
	}
}

export async function buildFont(fontPath: string) {
	const { path, fileName, location, extension } = getFilePartsFromPath(fontPath)

	const base64Font = await Bun.file(path)
		.arrayBuffer()
		.then(buffer => Buffer.from(buffer).toString('base64'))

	const fontConfig = (() => {
		switch (extension.toLowerCase()) {
			case 'otf':
				return {
					format: 'opentype',
					mimeType: 'font/opentype'
				}
			case 'ttf':
				return {
					format: 'truetype',
					mimeType: 'font/truetype'
				}
			default:
				throw new Error(`Unsupported font format: ${extension}`)
		}
	})()

	const font = {
		base64: `data:${fontConfig.mimeType};charset=utf-8;base64,${base64Font}`,
		format: fontConfig.format
	} as const

	const content = `import type { Font } from '@rubriclab/ui'

export const ${fileName}: Font = ${JSON.stringify(font, null, 2)}`

	await Bun.write(`${location}/${fileName}.ts`, content)
	console.log(`Font '${fileName}' converted and saved`)
}

await buildFont('/Users/dexterstorey/Code/rubric/apps/agent-builder/src/lib/ui/fonts/matter.otf')
