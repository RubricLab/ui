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
				const id = `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`

				const labelElement = (
					<Styled.Label
						ds={ds}
						attributes={{
							htmlFor: id,
							children: label
						}}
					/>
				)

				const textareaElement = (
					<Styled.Textarea
						ds={ds}
						attributes={{
							id,
							value: state,
							placeholder,
							maxLength,
							disabled,
							onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setState(e.target.value)
						}}
					/>
				)

				const counterElement = maxLength && (
					<Styled.Text
						ds={ds}
						attributes={{
							style: { fontSize: '0.8em', textAlign: 'right' },
							children: `${(state ?? '').length}/${maxLength}`
						}}
					/>
				)

				return (
					<Styled.Flex
						ds={ds}
						direction="column"
						gap="content"
						attributes={{
							children: [labelElement, textareaElement, counterElement].filter(Boolean)
						}}
					/>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
