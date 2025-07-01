import type { Asset, DSColor } from '../../../types/DesignSystem'

const ArrowDownLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Down arrow">
		<title>Down arrow</title>
		<path fill="#635BFF" d="M24.7 12.3l1.4 1.4-8.4 8.4-.7.7-.7-.7-8.4-8.4 1.4-1.4L16 19.6l7.3-7.3z" />
	</svg>
)

const ArrowDownDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Down arrow">
		<title>Down arrow</title>
		<path fill="#7A73FF" d="M24.7 12.3l1.4 1.4-8.4 8.4-.7.7-.7-.7-8.4-8.4 1.4-1.4L16 19.6l7.3-7.3z" />
	</svg>
)

const ArrowDownMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Down arrow">
		<title>Down arrow</title>
		<path fill={fill} d="M24.7 12.3l1.4 1.4-8.4 8.4-.7.7-.7-.7-8.4-8.4 1.4-1.4L16 19.6l7.3-7.3z" />
	</svg>
)

export const arrowDown: Asset = {
	dark: ArrowDownDark,
	light: ArrowDownLight,
	mono: ArrowDownMono
}
