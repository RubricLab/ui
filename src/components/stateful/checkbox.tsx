import { z } from 'zod'
import { Styled } from '../../style'
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
				const key = `${label.toLowerCase().replace(/\s+/g, '-')}-checkbox`

				return (
					<Styled.Flex
						ds={ds}
						direction="row"
						align="center"
						attributes={{
							children: [
								<Styled.Label
									key={`${key}-label`}
									ds={ds}
									attributes={{
										children: [
											<Styled.Checkbox
												key={`${key}-checkbox`}
												ds={ds}
												attributes={{
													type: 'checkbox',
													checked: state,
													disabled,
													onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
														setState(e.target.checked)
													}
												}}
											/>,
											label
										],
										style: { marginLeft: '0.5rem' }
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
