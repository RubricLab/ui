import type { ComponentType } from 'react'
import type { DesignSystem } from '../types/DesignSystem'
import { buildRootCSSVars } from './buildRootCss'

export default function createComponent<Props extends object>(Component: ComponentType<Props>) {
	return function withDS(ds: DesignSystem) {
		const cssString = buildRootCSSVars(ds)

		const Wrapped = (props: Props) => {
			return (
				<>
					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
					<style id="__root-vars" dangerouslySetInnerHTML={{ __html: cssString }} />
					<Component {...props} />
				</>
			)
		}

		Wrapped.displayName = `withDS(${Component.displayName || Component.name || 'Component'})`

		return Wrapped
	}
}
