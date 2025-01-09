import { expect, it } from 'bun:test'
import { buildRootCSSVars } from './buildRootCss'
import ds from '~/themes/rubric'

it('should build root css vars', () => {
	const css = buildRootCSSVars(ds)

	expect(css).toBeDefined()
})
