import type { Asset, DSColor } from '../../../types/DesignSystem'

const CrossLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Close">
		<title>Close</title>
		<path
			fill="#635BFF"
			d="M17.4 16l7.3-7.3-1.4-1.4-7.3 7.3-7.3-7.3-1.4 1.4 7.3 7.3-7.3 7.3 1.4 1.4 7.3-7.3 7.3 7.3 1.4-1.4-7.3-7.3z"
		/>
	</svg>
)

const CrossDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Close">
		<title>Close</title>
		<path
			fill="#7A73FF"
			d="M17.4 16l7.3-7.3-1.4-1.4-7.3 7.3-7.3-7.3-1.4 1.4 7.3 7.3-7.3 7.3 1.4 1.4 7.3-7.3 7.3 7.3 1.4-1.4-7.3-7.3z"
		/>
	</svg>
)

const CrossMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Close">
		<title>Close</title>
		<path
			fill={fill}
			d="M17.4 16l7.3-7.3-1.4-1.4-7.3 7.3-7.3-7.3-1.4 1.4 7.3 7.3-7.3 7.3 1.4 1.4 7.3-7.3 7.3 7.3 1.4-1.4-7.3-7.3z"
		/>
	</svg>
)

export const cross: Asset = {
	dark: CrossDark,
	light: CrossLight,
	mono: CrossMono
}
