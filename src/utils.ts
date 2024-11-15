import type { ReactElement } from 'react'
import Button from './components/button'
import Icon from './components/icon'
import Layout from './components/layout'
import Nav from './components/nav'
import Page from './components/page'
import type { DesignSystem } from './types'

export function createComponent<UI, Props>({
	render
}: {
	render: (props: Props, ui: UI) => ReactElement
}) {
	return (ui: UI) => {
		return (userProps: Props) => {
			return render(userProps, ui)
		}
	}
}

export function createUI<DS extends DesignSystem>(designSystem: DS) {
	return {
		Button: Button(designSystem),
		Icon: Icon(designSystem),
		Layout: Layout(designSystem),
		Page: Page(designSystem),
		Nav: Nav(designSystem)
	}
}
