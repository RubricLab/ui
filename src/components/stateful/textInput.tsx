import { z } from 'zod'
import { styled } from '../../styled'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createTextInput(ds: DesignSystem) {
	const stateSchema = z.string()
	return () =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string()
				}),
			render: ({ props: { label }, state, setState }) => (
				<styled.label ds={ds}>
					{label}
					<styled.input
						ds={ds}
						type="text"
						value={state}
						onChange={({ target: { value } }) => {
							setState(value)
						}}
					/>
				</styled.label>
			),
			_state: stateSchema
		})(ds)(stateSchema)
}
