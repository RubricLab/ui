import { createLayout } from './components/layout/layout'
import { createCheckbox } from './components/stateful/checkbox'
import { createDatePicker } from './components/stateful/datePicker'
import { createFileUpload } from './components/stateful/fileUpload'
import { createMultiSelect } from './components/stateful/multiSelect'
import { createSelect } from './components/stateful/select'
import { createTextInput } from './components/stateful/textInput'
import { createTextarea } from './components/stateful/textarea'
import { createBadge } from './components/static/badge'
import { createButton } from './components/static/button'
import type { DesignSystem } from './types'

export const createUI = (ds: DesignSystem) => ({
	// static
	Button: createButton(ds),
	Badge: createBadge(ds),
	// stateful
	createSelect: createSelect(ds),
	createMultiSelect: createMultiSelect(ds),
	createTextInput: createTextInput(ds),
	createTextarea: createTextarea(ds),
	createFileUpload: createFileUpload(ds),
	createCheckbox: createCheckbox(ds),
	createDatePicker: createDatePicker(ds),
	// layout
	Layout: createLayout(ds)
})

export { stripeTheme } from './themes/stripe'

export type * from './types'
