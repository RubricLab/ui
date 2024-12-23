import { createCheckbox } from './components/stateful/checkbox'
import { createInputNumber } from './components/stateful/input-number'
import { createRadio } from './components/stateful/radio'
import { createSelect } from './components/stateful/select'
import { createTextarea } from './components/stateful/textarea'
import { createToggle } from './components/stateful/toggle'
import { createAvatar } from './components/static/avatar'
import { createBadge } from './components/static/badge'
import { createButton } from './components/static/button'
import { createDivider } from './components/static/divider'
import { createIcon } from './components/static/icon'
import { createLink } from './components/static/link'
import { createSpinner } from './components/static/spinner'
import { createText } from './components/static/text'

import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from './types'

export function createUI<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	return {
		stateful: {
			Select: createSelect(ds),
			Checkbox: createCheckbox(ds),
			Radio: createRadio(ds),
			Toggle: createToggle(ds),
			InputNumber: createInputNumber(ds),
			Textarea: createTextarea(ds)
		},
		static: {
			Avatar: createAvatar(ds),
			Badge: createBadge(ds),
			Button: createButton(ds),
			Divider: createDivider(ds),
			Icon: createIcon(ds),
			Link: createLink(ds),
			Text: createText(ds),
			Spinner: createSpinner(ds)
		}
	}
}

export type ComponentLibrary = ReturnType<typeof createUI>

export { createDocs } from './utils/createDocs'

export * from '../src/themes'

export * from './types'

// Core exports
export { createStatefulUI } from './core'
export type { ComponentConfig, ComponentStyles, StatefulComponent, StyleProps } from './core'

// Component exports
export { createSelect } from './components/stateful/select'

// Design system exports
export type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from './types'
