import type { Asset, DSColor } from '../../../types/DesignSystem'

const MenuLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Menu">
		<title>Menu</title>
		<path fill="#635BFF" d="M6 10h20v2H6v-2zm0 5h20v2H6v-2zm0 5h20v2H6v-2z" />
	</svg>
)

const MenuDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Menu">
		<title>Menu</title>
		<path fill="#7A73FF" d="M6 10h20v2H6v-2zm0 5h20v2H6v-2zm0 5h20v2H6v-2z" />
	</svg>
)

const MenuMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Menu">
		<title>Menu</title>
		<path fill={fill} d="M6 10h20v2H6v-2zm0 5h20v2H6v-2zm0 5h20v2H6v-2z" />
	</svg>
)

export const menu: Asset = {
	dark: MenuDark,
	light: MenuLight,
	mono: MenuMono
}
