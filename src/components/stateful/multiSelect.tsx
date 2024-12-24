import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createMultiSelect(ds: DesignSystem) {
	return <T extends z.ZodType>(stateSchema: T) =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					placeholder: z.string(),
					options: z.array(z.object({ label: z.string(), value: stateSchema }))
				}),
			render: ({ props: { label, placeholder, options }, state, setState }) => {
				const key = `${label.toLowerCase().replace(/\s+/g, '-')}-multiselect`
				const selectedValues = state || []
				const selectedOptions = options.filter(option =>
					selectedValues.some(value => JSON.stringify(value) === JSON.stringify(option.value))
				)

				return (
					<Styled.Label
						ds={ds}
						attributes={{
							children: (
								<Styled.Flex
									ds={ds}
									direction="column"
									gap="content"
									attributes={{
										children: [
											label,
											<Styled.Select
												key={`${key}-select`}
												ds={ds}
												attributes={{
													multiple: true,
													value: selectedOptions.map(option => JSON.stringify(option.value)),
													onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
														const selected = Array.from(e.target.selectedOptions).map(option =>
															JSON.parse(option.value)
														)
														setState(selected)
													},
													children: [
														placeholder && (
															<option key={`${key}-placeholder`} value="" disabled>
																{placeholder}
															</option>
														),
														...options.map((option, index) => (
															<option key={`${key}-option-${index}`} value={JSON.stringify(option.value)}>
																{option.label}
															</option>
														))
													].filter(Boolean)
												}}
												overrides={{
													base: {
														minHeight: '120px' // Give more space for multiple selections
													}
												}}
											/>
										]
									}}
								/>
							)
						}}
					/>
				)
			},
			_state: z.array(stateSchema)
		})(ds)(z.array(stateSchema))
}
