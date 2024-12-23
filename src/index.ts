import { createLayout } from './components/layout/layout'
import { createCheckbox } from './components/stateful/checkbox'
import { createSelect } from './components/stateful/select'
import { createTextInput } from './components/stateful/textInput'
import { createButton } from './components/static/button'
import type { DesignSystem } from './types'

export const createUI = (ds: DesignSystem) => ({
	// static
	Button: createButton(ds),
	// stateful
	createSelect: createSelect(ds),
	createTextInput: createTextInput(ds),
	createCheckbox: createCheckbox(ds),
	// layout
	Layout: createLayout(ds)
})

export { stripeTheme } from './themes/stripe'

export type * from './types'
