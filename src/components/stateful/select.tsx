import { z } from 'zod'
import { styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createSelect(ds: DesignSystem) {
	return <T extends z.ZodType>(stateSchema: T) =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					placeholder: z.string(),
					options: z.array(z.object({ label: z.string(), value: stateSchema }))
				}),
			render: ({ props: { label, placeholder, options }, state, setState }) => (
				<styled.label ds={ds}>
					{label}
					<styled.select
						ds={ds}
						value={JSON.stringify(state)}
						onChange={({ target: { value } }) => setState(JSON.parse(value) ?? undefined)}
					>
						{placeholder && <option value={JSON.stringify(null)}>{placeholder}</option>}
						{options.map((item, k) => (
							<option key={k} value={JSON.stringify(item.value)}>
								{item.label}
							</option>
						))}
					</styled.select>
				</styled.label>
			),
			_state: stateSchema
		})(ds)(stateSchema)
}
