import type { Asset, Hex } from '../../../types'

export const icon: Asset = {
	light: () => (
		<svg width="100%" height="100%" viewBox="0 0 360 360">
			<title>Rubric Logo</title>
			<path d="M0,360V0h120v120h120V0h120v120H240v120H120v120H0z" fill="black" />
		</svg>
	),
	dark: () => (
		<svg width="100%" height="100%" viewBox="0 0 360 360">
			<title>Rubric Logo</title>
			<path d="M0,360V0h120v120h120V0h120v120H240v120H120v120H0z" fill="white" />
		</svg>
	),
	mono: (fill: Hex) => (
		<svg width="100%" height="100%" viewBox="0 0 360 360">
			<title>Rubric Logo</title>
			<path d="M0,360V0h120v120h120V0h120v120H240v120H120v120H0z" fill={fill} />
		</svg>
	)
}
