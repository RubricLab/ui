import { z } from 'zod'
import { styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createCheckbox(ds: DesignSystem) {
	const stateSchema = z.boolean()
	return () =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					disabled: z.boolean().optional()
				}),
			render: ({ props: { label, disabled }, state, setState }) => {
				return (
					// biome-ignore lint/a11y/noLabelWithoutControl: BIOME Bug?
					<styled.label ds={ds}>
						{label}
						<styled.checkbox
							ds={ds}
							type="checkbox"
							checked={state}
							disabled={disabled}
							onChange={({ target: { checked } }) => {
								setState(checked)
							}}
						/>
					</styled.label>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
