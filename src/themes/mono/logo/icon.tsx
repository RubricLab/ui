import type { Asset } from '@rubriclab/ui'

export const icon: Asset = {
	light: () => (
		<svg width="100%" height="100%" viewBox="0 0 900 900">
			<title>Rubric Logo</title>
			<path d="M300 600V300H400V400H500V300H600V400H500V500H400V600H300Z" fill="black" />
		</svg>
	),
	dark: () => (
		<svg width="100%" height="100%" viewBox="0 0 900 900">
			<title>Rubric Logo</title>
			<path d="M300 600V300H400V400H500V300H600V400H500V500H400V600H300Z" fill="white" />
		</svg>
	),
	mono: (fill: `#${string}`) => (
		<svg width="100%" height="100%" viewBox="0 0 900 900">
			<title>Rubric Logo</title>
			<path d="M300 600V300H400V400H500V300H600V400H500V500H400V600H300Z" fill={fill} />
		</svg>
	)
}
