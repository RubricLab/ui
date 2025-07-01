import type { Asset, DSColor } from '../../../types/DesignSystem'

const TrashLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Delete">
		<title>Delete</title>
		<path
			fill="#635BFF"
			d="M12 6v2h8V6h-8zm-1 4v16h10V10H11zm2 2h6v12h-6V12zm-4-8h14v2h2V4H7v2h2v2z"
		/>
	</svg>
)

const TrashDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Delete">
		<title>Delete</title>
		<path
			fill="#7A73FF"
			d="M12 6v2h8V6h-8zm-1 4v16h10V10H11zm2 2h6v12h-6V12zm-4-8h14v2h2V4H7v2h2v2z"
		/>
	</svg>
)

const TrashMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Delete">
		<title>Delete</title>
		<path fill={fill} d="M12 6v2h8V6h-8zm-1 4v16h10V10H11zm2 2h6v12h-6V12zm-4-8h14v2h2V4H7v2h2v2z" />
	</svg>
)

export const trash: Asset = {
	dark: TrashDark,
	light: TrashLight,
	mono: TrashMono
}
