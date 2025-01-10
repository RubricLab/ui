import type { DesignSystem } from '../types/DesignSystem'

export function buildRootCSSVars(ds: DesignSystem): string {
	return `
:root {
  /* Colors - Light Mode */
  ${Object.entries(ds.colors.light)
			.flatMap(([category, states]) =>
				Object.entries(states).map(([state, color]) => `--color-${category}-${state}: ${color};`)
			)
			.join('\n  ')}

  /* Typography */
  /* Font Settings */
  --typography-heading-line-height: ${ds.typography.settings.headingLineHeight};
  --typography-body-line-height: ${ds.typography.settings.bodyLineHeight};
  ${ds.typography.settings.headingLetterSpacing ? `--typography-heading-letter-spacing: ${ds.typography.settings.headingLetterSpacing};` : ''}
  ${ds.typography.settings.bodyLetterSpacing ? `--typography-body-letter-spacing: ${ds.typography.settings.bodyLetterSpacing};` : ''}

  /* Typography Scale */
  ${Object.entries(ds.typography.scale)
			.map(
				([key, val]) =>
					`--typography-${key}-size: ${val.fontSize};
  --typography-${key}-line-height: ${val.lineHeight};
  ${val.fontWeight ? `--typography-${key}-weight: ${val.fontWeight};` : ''}`
			)
			.join('\n  ')}

  /* Spacing */
  ${Object.entries(ds.spacing)
			.map(([key, val]) => `--spacing-${key}: ${val};`)
			.join('\n  ')}

  /* Border Radius */
  ${Object.entries(ds.rounding)
			.map(([key, val]) => `--radius-${key}: ${val};`)
			.join('\n  ')}

  /* Shadows */
  ${Object.entries(ds.shadows)
			.map(
				([key, val]) => `--shadow-${key}: ${val.offsetX} ${val.offsetY} ${val.blurRadius} ${val.color};`
			)
			.join('\n  ')}

  /* Extended Shadows */
  ${
			ds.extendedShadows
				? Object.entries(ds.extendedShadows)
						.map(([key, val]) => `--extended-shadow-${key}: ${val};`)
						.join('\n  ')
				: ''
		}

  /* Animations */
  ${Object.entries(ds.animations)
			.map(
				([key, val]) =>
					`--animation-${key}-duration: ${val.duration};
  --animation-${key}-timing: ${val.timing};`
			)
			.join('\n  ')}

  /* Transitions */
  ${Object.entries(ds.transitions)
			.map(([key, val]) => `--transition-${key}: ${val};`)
			.join('\n  ')}

  /* Borders */
  ${Object.entries(ds.borders)
			.map(
				([key, val]) =>
					`--border-${key}-width: ${val.width};
  --border-${key}-style: ${val.style};`
			)
			.join('\n  ')}

  /* Breakpoints */
  ${Object.entries(ds.breakpoints)
			.map(([key, val]) => `--breakpoint-${key}: ${val};`)
			.join('\n  ')}
}

/* Font Face Declarations */
@font-face {
  font-family: 'Body Font';
  src: url(${ds.typography.fonts.body.base64}) format('${ds.typography.fonts.body.format}');
  font-display: swap;
}

@font-face {
  font-family: 'Heading Font';
  src: url(${ds.typography.fonts.heading.base64}) format('${ds.typography.fonts.heading.format}');
  font-display: swap;
}

@font-face {
  font-family: 'Monospace Font';
  src: url(${ds.typography.fonts.monospace.base64}) format('${ds.typography.fonts.monospace.format}');
  font-display: swap;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Colors - Dark Mode */
    ${Object.entries(ds.colors.dark)
					.flatMap(([category, states]) =>
						Object.entries(states).map(([state, color]) => `--color-${category}-${state}: ${color};`)
					)
					.join('\n    ')}
  }
}`.trim()
}
