import type { Asset, DSColor } from '../../../types/DesignSystem'

const IconLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Stripe icon">
		<title>Stripe icon</title>
		<rect width={32} height={8} y={12} rx={4} fill="#635BFF" />
	</svg>
)

const IconDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Stripe icon">
		<title>Stripe icon</title>
		<rect width={32} height={8} y={12} rx={4} fill="#7A73FF" />
	</svg>
)

const IconMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Stripe icon">
		<title>Stripe icon</title>
		<rect width={32} height={8} y={12} rx={4} fill={fill} />
	</svg>
)

export const icon: Asset = {
	light: IconLight,
	dark: IconDark,
	mono: IconMono
}
