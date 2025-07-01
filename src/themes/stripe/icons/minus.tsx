import type { Asset, DSColor } from '../../../types/DesignSystem'

const MinusLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Remove">
		<title>Remove</title>
		<path fill="#635BFF" d="M8 15v2h16v-2H8z" />
	</svg>
)

const MinusDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Remove">
		<title>Remove</title>
		<path fill="#7A73FF" d="M8 15v2h16v-2H8z" />
	</svg>
)

const MinusMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Remove">
		<title>Remove</title>
		<path fill={fill} d="M8 15v2h16v-2H8z" />
	</svg>
)

export const minus: Asset = {
	dark: MinusDark,
	light: MinusLight,
	mono: MinusMono
}
