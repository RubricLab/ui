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
				const id = `input-${label.toLowerCase().replace(/\s+/g, '-')}`

				const labelElement = (
					<Styled.Label
						ds={ds}
						attributes={{
							htmlFor: id,
							children: label
						}}
					/>
				)

				const inputElement = (
					<Styled.Input
						ds={ds}
						type="text"
						attributes={{
							id,
							value: state,
							placeholder,
							disabled,
							onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
								setState(e.target.value)
							}
						}}
					/>
				)

				return (
					<Styled.Flex
						ds={ds}
						direction="column"
						gap="content"
						attributes={{
							children: [labelElement, inputElement]
						}}
					/>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
