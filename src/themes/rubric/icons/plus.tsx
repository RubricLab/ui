import type { Asset, DSColor } from '../../../types/DesignSystem'

const PlusLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Add">
		<title>Add</title>
		<path fill="#635BFF" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2h-7z" />
	</svg>
)

const PlusDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Add">
		<title>Add</title>
		<path fill="#7A73FF" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2h-7z" />
	</svg>
)

const PlusMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Add">
		<title>Add</title>
		<path fill={fill} d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2h-7z" />
	</svg>
)

export const plus: Asset = {
	dark: PlusDark,
	light: PlusLight,
	mono: PlusMono
}
