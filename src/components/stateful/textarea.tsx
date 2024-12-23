import { z } from 'zod'
import { styled } from '../../styled'
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
			render: ({ props: { label, placeholder, maxLength, disabled }, state, setState }) => (
				<styled.label ds={ds}>
					{label}
					<styled.textarea
						ds={ds}
						value={state}
						placeholder={placeholder}
						maxLength={maxLength}
						disabled={disabled}
						onChange={({ target: { value } }) => setState(value)}
					/>
					{maxLength && (
						<styled.div ds={ds} style={{ fontSize: '0.8em', textAlign: 'right' }}>
							{(state ?? '').length}/{maxLength}
						</styled.div>
					)}
				</styled.label>
			),
			_state: stateSchema
		})(ds)(stateSchema)
}
