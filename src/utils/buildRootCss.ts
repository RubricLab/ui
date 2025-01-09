import type { DesignSystem } from '~/types/DesignSystem'

export function buildRootCSSVars(ds: DesignSystem): string {
	const light = ds.colors.light
	const dark = ds.colors.dark

	const spacingEntries = Object.entries(ds.spacing)
		.map(([key, val]) => `--spacing-${key}: ${val};`)
		.join('\n  ')

	const lightModeCSS = `
:root {
  /* Light mode colors */
  --color-primary: ${light.primary};
  --color-secondary: ${light.secondary};
  --color-success: ${light.success};
  --color-danger: ${light.danger};
  --color-background: ${light.background};
  --color-text: ${light.text};

  /* Spacing */
  ${spacingEntries}
}
`.trim()

	const darkModeCSS = `
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: ${dark.primary};
    --color-secondary: ${dark.secondary};
    --color-success: ${dark.success};
    --color-danger: ${dark.danger};
    --color-background: ${dark.background};
    --color-text: ${dark.text};
  }
}
`.trim()

	return [lightModeCSS, darkModeCSS].join('\n\n')
}
