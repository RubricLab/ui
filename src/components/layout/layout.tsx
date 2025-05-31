import React, { type ReactNode } from 'react'
import type { DesignSystem } from '../../types/DesignSystem'
import { buildRootCSSVars } from '../../utils/buildRootCss'

export function createLayout(ds: DesignSystem) {
	return async function Layout({ children }: { children: ReactNode }) {
		const cssString = buildRootCSSVars(ds)

		return (
			<html lang="en">
				<head>
					<style>{cssString}</style>
				</head>
				<body style={{ margin: 0 }}>{children}</body>
			</html>
		)
	}
}
