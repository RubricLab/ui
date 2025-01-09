import type { Asset, DSColor } from '../../../types/DesignSystem'

const ArrowLeftLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Left arrow">
		<title>Left arrow</title>
		<path
			fill="#635BFF"
			d="M19.7 24.7l-1.4 1.4-8.4-8.4-.7-.7.7-.7 8.4-8.4 1.4 1.4L12.4 16l7.3 7.3z"
		/>
	</svg>
)

const ArrowLeftDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Left arrow">
		<title>Left arrow</title>
		<path
			fill="#7A73FF"
			d="M19.7 24.7l-1.4 1.4-8.4-8.4-.7-.7.7-.7 8.4-8.4 1.4 1.4L12.4 16l7.3 7.3z"
		/>
	</svg>
)

const ArrowLeftMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Left arrow">
		<title>Left arrow</title>
		<path fill={fill} d="M19.7 24.7l-1.4 1.4-8.4-8.4-.7-.7.7-.7 8.4-8.4 1.4 1.4L12.4 16l7.3 7.3z" />
	</svg>
)

export const arrowLeft: Asset = {
	light: ArrowLeftLight,
	dark: ArrowLeftDark,
	mono: ArrowLeftMono
}
