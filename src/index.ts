import { createButton } from './components/button'
import { createForm } from './components/form'
import { createIcon } from './components/icon'
import { createLayout } from './components/layout'

import type {
	ButtonConfig,
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	FormConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from './types'

export function createUI<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons, Button, Form>) {
	return {
		Button: createButton(ds),
		Form: createForm(ds),
		Layout: createLayout(ds),
		Icon: createIcon(ds)
	}
}

export * from './themes'

export * from './types'
