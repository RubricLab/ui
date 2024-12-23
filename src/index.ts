import { createSelect } from './components/stateful/select'
import { createButton } from './components/static/button'
import type { DesignSystem } from './types'

export const createUI = (ds: DesignSystem) => ({
	// static
	Button: createButton(ds),
	// stateful
	createSelect: createSelect(ds)
})

export { stripeTheme } from './themes/stripe'

export type * from './types'
