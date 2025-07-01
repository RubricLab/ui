import type { Asset, DSColor } from '../../../types/DesignSystem'

const EditLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Edit">
		<title>Edit</title>
		<path
			fill="#635BFF"
			d="M22.3 8.3l1.4 1.4L11.4 22H10v-1.4l12.3-12.3zm0-2.8L8 19.8V24h4.2L26.5 9.7 22.3 5.5zM6 24v4h20v-4H6z"
		/>
	</svg>
)

const EditDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Edit">
		<title>Edit</title>
		<path
			fill="#7A73FF"
			d="M22.3 8.3l1.4 1.4L11.4 22H10v-1.4l12.3-12.3zm0-2.8L8 19.8V24h4.2L26.5 9.7 22.3 5.5zM6 24v4h20v-4H6z"
		/>
	</svg>
)

const EditMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Edit">
		<title>Edit</title>
		<path
			fill={fill}
			d="M22.3 8.3l1.4 1.4L11.4 22H10v-1.4l12.3-12.3zm0-2.8L8 19.8V24h4.2L26.5 9.7 22.3 5.5zM6 24v4h20v-4H6z"
		/>
	</svg>
)

export const edit: Asset = {
	dark: EditDark,
	light: EditLight,
	mono: EditMono
}
