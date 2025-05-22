import React, { type ComponentType, type ReactNode } from 'react'
import type { DesignSystem } from '../../types/DesignSystem'
import { buildRootCSSVars } from '../../utils/buildRootCss'

// biome-ignore lint/suspicious/noExplicitAny: Any props
type Entry<Props = any> = readonly [
	ComponentType<Props & { children: ReactNode }>,
	Props | (() => Promise<Props>)
]

export function createLayout(ds: DesignSystem) {
	return function CreateLayout(entries: readonly [...Entry[]] = []) {
		return async function Layout({ children }: { children: ReactNode }) {
			const cssString = buildRootCSSVars(ds)

			let tree: ReactNode = children

			for (const [Provider, raw] of [...entries].reverse()) {
				const props = typeof raw === 'function' ? await raw() : await raw
				tree = <Provider {...props}>{tree}</Provider>
			}

			return (
				<html lang="en">
					<head>
						<style>{cssString}</style>
					</head>
					<body style={{ margin: 0 }}>{tree}</body>
				</html>
			)
		}
	}
}
