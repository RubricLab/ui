import React from 'react'
import type { ComponentType } from 'react'
import type { DesignSystem } from '../types/DesignSystem'
import { buildRootCSSVars } from '../utils/buildRootCss'

export default function createComponent<Props extends object>(Component: ComponentType<Props>) {
	return function withDS(ds: DesignSystem) {
		const cssString = buildRootCSSVars(ds)

		const Wrapped: React.FC<Props> = props => {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement('style', {
					id: '__root-vars',
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML: { __html: cssString }
				}),
				React.createElement(Component, props)
			)
		}

		Wrapped.displayName = `withDS(${Component.displayName || Component.name || 'Component'})`

		return Wrapped
	}
}
