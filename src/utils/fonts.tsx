import type { FontsConfig } from '~/types'

export function FontFaces({ fonts }: { fonts: FontsConfig }) {
	return (
		<style>
			{Object.entries(fonts)
				.map(
					([key, font]) => `
				@font-face {
					font-family: '${key}';
					src: url('${font.base64}') format('${font.format}');
				}
			`
				)
				.join('')}
		</style>
	)
}
