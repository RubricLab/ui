import type { ReactElement } from 'react'
import type { StyleProps } from './styled'
import { Styled } from './styled'

interface DarkSwitchProps {
	component: (id: string) => ReactElement
	darkComponent: (id: string) => ReactElement
}

interface DarkSwitchStylesProps {
	styles: StyleProps
	darkStyles: Partial<StyleProps>
}

export function DarkSwitch({ component, darkComponent }: DarkSwitchProps) {
	return (
		<>
			<Styled styles={{}} darkStyles={{ display: 'none' }} component={component} />
			<Styled
				styles={{ display: 'none' }}
				darkStyles={{ display: 'block' }}
				component={darkComponent}
			/>
		</>
	)
}

export function createDarkStyles<T extends Record<string, StyleProps>>({
	styles,
	darkStyles
}: DarkSwitchStylesProps): T {
	return {
		...styles,
		dark: darkStyles
	} as T
}
