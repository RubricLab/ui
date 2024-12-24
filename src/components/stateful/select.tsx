import { z } from 'zod'
import { Styled } from '../../style'
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
			render: ({ props: { label, placeholder, options }, state, setState }) => {
				const key = `${label.toLowerCase().replace(/\s+/g, '-')}-select`

				return (
					<Styled.Label
						key={`${key}-label`}
						ds={ds}
						attributes={{
							children: [
								label,
								<Styled.Select
									key={`${key}-select`}
									ds={ds}
									attributes={{
										value: JSON.stringify(state),
										onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
											setState(JSON.parse(e.target.value) ?? undefined),
										children: [
											placeholder && (
												<option key="placeholder" value={JSON.stringify(null)}>
													{placeholder}
												</option>
											),
											...options.map((item, k) => (
												<option key={k} value={JSON.stringify(item.value)}>
													{item.label}
												</option>
											))
										].filter(Boolean)
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
