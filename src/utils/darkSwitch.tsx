import type { ReactElement } from 'react'
import { Styled } from '~/utils/styled'

export function DarkSwitch({
	component,
	darkComponent
}: { component: (id: string) => ReactElement; darkComponent: (id: string) => ReactElement }) {
	return (
		<>
			<Styled styles={{}} darkStyles={{ display: 'none' }} component={id => component(id)} />
			<Styled
				styles={{ display: 'none' }}
				darkStyles={{ display: 'block' }}
				component={id => darkComponent(id)}
			/>
		</>
	)
}
