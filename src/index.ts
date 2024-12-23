import { createSelect } from './components/stateful/select'
import type { DesignSystem } from './types'

export const createUI = (ds: DesignSystem) => ({
	createSelect: createSelect(ds)
})

export { stripeTheme } from './themes/stripe'
