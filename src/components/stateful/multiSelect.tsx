import { z } from 'zod'
import { styled } from '../../styled'
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
				const selectedValues = state || []
				const selectedOptions = options.filter(option =>
					selectedValues.some(value => JSON.stringify(value) === JSON.stringify(option.value))
				)

				return (
					<styled.label ds={ds}>
						{label}
						<styled.select
							ds={ds}
							multiple
							value={selectedOptions.map(option => JSON.stringify(option.value))}
							onChange={({ target }) => {
								const selected = Array.from(target.selectedOptions).map(option => JSON.parse(option.value))
								setState(selected)
							}}
						>
							{placeholder && (
								<option value="" disabled>
									{placeholder}
								</option>
							)}
							{options.map((option, index) => (
								<option key={index} value={JSON.stringify(option.value)}>
									{option.label}
								</option>
							))}
						</styled.select>
					</styled.label>
				)
			},
			_state: z.array(stateSchema)
		})(ds)(z.array(stateSchema))
}
