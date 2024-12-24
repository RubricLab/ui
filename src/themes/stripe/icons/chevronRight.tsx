import type { Asset } from '@rubriclab/ui'

export const chevronRight: Asset = {
	light: () => (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<title>Chevron Right</title>
			<path fill="black" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
		</svg>
	),
	dark: () => (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<title>Chevron Right</title>
			<path fill="white" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
		</svg>
	),
	mono: (fill: `#${string}`) => (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<title>Chevron Right</title>
			<path fill={fill} d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
		</svg>
	)
}
