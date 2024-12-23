import { z } from 'zod'
import type { ComponentConfig } from '../../core'
import { createStatefulUI } from '../../core'
import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../../types'

// Props specific to Select
interface SelectProps<T> {
	items: readonly T[]
	display: keyof T
	label: string
	disabled?: boolean
}

// Helper to create select config
function createSelectConfig<T>(): ComponentConfig<SelectProps<T>, T> {
	return {
		name: 'select',

		schema: ds =>
			z.object({
				items: z.array(z.unknown()),
				display: z.string(),
				label: z.string(),
				disabled: z.boolean().optional()
			}),

		styles: ds => ({
			root: {
				display: 'flex',
				flexDirection: 'column',
				gap: ds.sizes.content.space
			},
			label: {
				color: ds.colors.text.light,
				fontSize: ds.sizes.content.text,
				fontFamily: 'text'
			},
			input: {
				backgroundColor: ds.colors.bg.light,
				color: ds.colors.text.light,
				padding: ds.sizes.content.space,
				borderRadius: ds.sizes.content.rounding,
				fontSize: ds.sizes.content.text,
				fontFamily: 'text',
				border: `1px solid ${ds.colors.border.light}`,
				width: '100%',
				cursor: 'pointer',
				'&:hover': {
					borderColor: ds.colors.active.light
				},
				'&:focus': {
					outline: 'none',
					borderColor: ds.colors.focus.light,
					boxShadow: `0 0 0 2px ${ds.colors.focus.light}20`
				}
			}
		}),

		render: ({ value, onChange, items, display, label, disabled }) => {
			const selectedIndex = value ? items.indexOf(value) : -1

			return (
				<select
					value={selectedIndex}
					onChange={e => {
						const index = Number.parseInt(e.target.value)
						onChange(index >= 0 ? items[index] : undefined)
					}}
					disabled={disabled}
				>
					<option value={-1}>{label}</option>
					{items.map((item, index) => (
						<option key={index} value={index}>
							{String(item[display])}
						</option>
					))}
				</select>
			)
		}
	}
}

// Export the component creator
export function createSelect<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	return function useSelect<T extends object>() {
		return createStatefulUI<SelectProps<T>, T>(createSelectConfig<T>())(ds)
	}
}
