import { createLayout } from './components/layout/layout'
import { createNavigation } from './components/layout/navigation'
import { createPage } from './components/layout/page'
import { createCheckbox } from './components/stateful/checkbox'
import { createDatePicker } from './components/stateful/datePicker'
import { createFileUpload } from './components/stateful/fileUpload'
import { createMultiSelect } from './components/stateful/multiSelect'
import { createSelect } from './components/stateful/select'
import { createTextInput } from './components/stateful/textInput'
import { createTextarea } from './components/stateful/textarea'
import { createBadge } from './components/static/badge'
import { createButton } from './components/static/button'
import { createHeading } from './components/static/heading'
import { createLink } from './components/static/link'
import { createLogo } from './components/static/logo'
import { createSidebar } from './components/static/sidebar'
import { createText } from './components/static/text'
import type { DesignSystem } from './types'

export const createUI = (ds: DesignSystem) => ({
	// static
	Button: createButton(ds),
	Badge: createBadge(ds),
	Heading: createHeading(ds),
	Text: createText(ds),
	Link: createLink(ds),
	Logo: createLogo(ds),
	// stateful
	createSelect: createSelect(ds),
	createMultiSelect: createMultiSelect(ds),
	createTextInput: createTextInput(ds),
	createTextarea: createTextarea(ds),
	createFileUpload: createFileUpload(ds),
	createCheckbox: createCheckbox(ds),
	createDatePicker: createDatePicker(ds),
	// layout
	Layout: createLayout(ds),
	Page: createPage(ds),
	Navigation: createNavigation(ds),
	Sidebar: createSidebar(ds)
})

export { stripeTheme } from './themes/stripe'

export type * from './types'
