import { expect, it } from 'bun:test'
import ds from '~/themes/rubric'
import { buildRootCSSVars } from './buildRootCss'

it('should build root css vars', () => {
	const css = buildRootCSSVars(ds)

	expect(css).toBeDefined()
})
