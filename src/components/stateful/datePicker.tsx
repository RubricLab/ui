import { z } from 'zod'
import { Styled } from '../../style'
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
				const id = `datepicker-${label.toLowerCase().replace(/\s+/g, '-')}`

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
						type="datetime-local"
						attributes={{
							id,
							value: state ? new Date(state).toISOString().slice(0, 16) : '',
							min,
							max,
							disabled,
							placeholder,
							onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)
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
