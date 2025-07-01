import type { Asset, DSColor } from '../../../types/DesignSystem'

const ArrowRightLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Right arrow">
		<title>Right arrow</title>
		<path
			fill="#635BFF"
			d="M12.3 24.7l1.4 1.4 8.4-8.4.7-.7-.7-.7-8.4-8.4-1.4 1.4L19.6 16l-7.3 7.3z"
		/>
	</svg>
)

const ArrowRightDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Right arrow">
		<title>Right arrow</title>
		<path
			fill="#7A73FF"
			d="M12.3 24.7l1.4 1.4 8.4-8.4.7-.7-.7-.7-8.4-8.4-1.4 1.4L19.6 16l-7.3 7.3z"
		/>
	</svg>
)

const ArrowRightMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Right arrow">
		<title>Right arrow</title>
		<path fill={fill} d="M12.3 24.7l1.4 1.4 8.4-8.4.7-.7-.7-.7-8.4-8.4-1.4 1.4L19.6 16l-7.3 7.3z" />
	</svg>
)

export const arrowRight: Asset = {
	dark: ArrowRightDark,
	light: ArrowRightLight,
	mono: ArrowRightMono
}
