import type { ReactElement } from 'react'
import { Styled } from './styled'

export function DarkSwitch({
	component,
	darkComponent
}: { component: ReactElement; darkComponent: ReactElement }) {
	return (
		<>
			<Styled styles={{}} darkStyles={{ display: 'none' }} component={() => component} />
		</>
	)
}
