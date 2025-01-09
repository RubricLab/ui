import type { Asset, DSColor } from '../../../types/DesignSystem'

const ArrowUpLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Up arrow">
		<title>Up arrow</title>
		<path fill="#635BFF" d="M24.7 19.7l1.4-1.4-8.4-8.4-.7-.7-.7.7-8.4 8.4 1.4 1.4L16 12.4l7.3 7.3z" />
	</svg>
)

const ArrowUpDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Up arrow">
		<title>Up arrow</title>
		<path fill="#7A73FF" d="M24.7 19.7l1.4-1.4-8.4-8.4-.7-.7-.7.7-8.4 8.4 1.4 1.4L16 12.4l7.3 7.3z" />
	</svg>
)

const ArrowUpMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Up arrow">
		<title>Up arrow</title>
		<path fill={fill} d="M24.7 19.7l1.4-1.4-8.4-8.4-.7-.7-.7.7-8.4 8.4 1.4 1.4L16 12.4l7.3 7.3z" />
	</svg>
)

export const arrowUp: Asset = {
	light: ArrowUpLight,
	dark: ArrowUpDark,
	mono: ArrowUpMono
}
