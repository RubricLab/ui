import type { Asset, DSColor } from '../../../types/DesignSystem'

const SearchLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Search">
		<title>Search</title>
		<path
			fill="#635BFF"
			d="M20.5 19.1l4.9 4.9-1.4 1.4-4.9-4.9a8.5 8.5 0 111.4-1.4zM14 20.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
		/>
	</svg>
)

const SearchDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Search">
		<title>Search</title>
		<path
			fill="#7A73FF"
			d="M20.5 19.1l4.9 4.9-1.4 1.4-4.9-4.9a8.5 8.5 0 111.4-1.4zM14 20.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
		/>
	</svg>
)

const SearchMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Search">
		<title>Search</title>
		<path
			fill={fill}
			d="M20.5 19.1l4.9 4.9-1.4 1.4-4.9-4.9a8.5 8.5 0 111.4-1.4zM14 20.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
		/>
	</svg>
)

export const search: Asset = {
	light: SearchLight,
	dark: SearchDark,
	mono: SearchMono
}
