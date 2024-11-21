import { createButton } from './components/button'
import { createForm } from './components/form'

import type { ButtonConfig, ColorsConfig, FormConfig, IconsConfig, SizesConfig } from './types'

export function createUI<
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: {
	colors: Colors
	sizes: Sizes
	icons: Icons
	components: {
		Button: Button
		Form: Form
	}
}) {
	return {
		Button: createButton(ds),
		Form: createForm(ds)
	}
}

export * from './types'
