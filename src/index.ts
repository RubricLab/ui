import { createButton } from './components/button'
import { createForm } from './components/form'
import { createIcon } from './components/icon'
import { createLayout } from './components/layout'

import type { DesignSystemFunction } from './types'

export const createUI: DesignSystemFunction<'Components'> = ds => ({
	Button: createButton(ds),
	Form: createForm(ds),
	Layout: createLayout(ds),
	Icon: createIcon(ds)
})

export * from './themes'

export * from './types'
