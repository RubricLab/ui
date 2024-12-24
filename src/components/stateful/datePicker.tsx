import { z } from 'zod'
import { styled } from '../../styled'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createDatePicker(ds: DesignSystem) {
	const stateSchema = z.string().datetime().nullable()
	return () =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					placeholder: z.string(),
					min: z.string().datetime().optional(),
					max: z.string().datetime().optional(),
					disabled: z.boolean().optional()
				}),
			render: ({ props: { label, placeholder, min, max, disabled }, state, setState }) => {
				const handleChange = (value: string) => {
					if (!value) {
						setState(null)
						return
					}

					try {
						// Ensure the date is valid and in ISO format
						const date = new Date(value)
						setState(date.toISOString())
					} catch {
						setState(null)
					}
				}

				return (
					<styled.label ds={ds}>
						{label}
						<styled.input
							ds={ds}
							type="datetime-local"
							value={state ? new Date(state).toISOString().slice(0, 16) : ''}
							min={min}
							max={max}
							disabled={disabled}
							placeholder={placeholder}
							onChange={e => handleChange(e.target.value)}
						/>
					</styled.label>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
