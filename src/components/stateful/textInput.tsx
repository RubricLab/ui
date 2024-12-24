import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createTextInput(ds: DesignSystem) {
	const stateSchema = z.string()
	return () =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					placeholder: z.string().optional(),
					disabled: z.boolean().optional()
				}),
			render: ({ props: { label, placeholder, disabled }, state, setState }) => {
				const key = `${label.toLowerCase().replace(/\s+/g, '-')}-input`

				return (
					<Styled.Label
						key={`${key}-label`}
						ds={ds}
						attributes={{
							children: [
								label,
								<Styled.Input
									key={`${key}-input`}
									ds={ds}
									type="text"
									attributes={{
										value: state,
										placeholder,
										disabled,
										onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
											setState(e.target.value)
										}
									}}
								/>
							]
						}}
					/>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
