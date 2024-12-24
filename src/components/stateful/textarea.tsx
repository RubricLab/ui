import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createTextarea(ds: DesignSystem) {
	const stateSchema = z.string()
	return () =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					placeholder: z.string(),
					maxLength: z.number().optional(),
					disabled: z.boolean().optional()
				}),
			render: ({ props: { label, placeholder, maxLength, disabled }, state, setState }) => {
				const key = `${label.toLowerCase().replace(/\s+/g, '-')}-textarea`

				return (
					<Styled.Flex
						ds={ds}
						direction="column"
						attributes={{
							children: [
								<Styled.Label
									key={`${key}-label`}
									ds={ds}
									attributes={{
										children: [
											label,
											<Styled.Textarea
												key={`${key}-textarea`}
												ds={ds}
												attributes={{
													value: state,
													placeholder,
													maxLength,
													disabled,
													onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setState(e.target.value)
												}}
											/>
										]
									}}
								/>,
								<Styled.Text
									key={`${key}-counter`}
									ds={ds}
									attributes={{
										style: { fontSize: '0.8em', textAlign: 'right' },
										children: `${(state ?? '').length}/${maxLength}`
									}}
								/>
							].filter(Boolean)
						}}
					/>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
