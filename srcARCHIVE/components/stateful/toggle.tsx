import { useState } from 'react'
import { z } from 'zod'
import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../../types'
import { Styled } from '../../utils/styled'

export function createToggleSchema() {
	return z.object({
		label: z.string(),
		defaultChecked: z.boolean().optional(),
		disabled: z.boolean().optional()
	})
}

export function rawToggle({
	backgroundColor,
	textColor,
	borderColor,
	size,
	label,
	checked,
	disabled = false,
	onChange
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	borderColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	label: string
	checked: boolean
	disabled?: boolean
	onChange: (checked: boolean) => void
}) {
	return (
		<Styled
			styles={{
				display: 'flex',
				alignItems: 'center',
				gap: size.space,
				opacity: disabled ? 0.5 : 1,
				cursor: disabled ? 'not-allowed' : 'pointer'
			}}
			darkStyles={{}}
			component={containerId => (
				<label id={containerId}>
					<Styled
						styles={{
							position: 'relative',
							display: 'inline-block',
							width: `calc(${size.space} * 2)`,
							height: size.space
						}}
						darkStyles={{}}
						component={toggleId => (
							<div id={toggleId}>
								<Styled
									styles={{
										opacity: 0,
										width: 0,
										height: 0,
										'&:checked + span': {
											backgroundColor: textColor.light,
											'&::before': {
												transform: `translateX(calc(${size.space} - 2px))`
											}
										}
									}}
									darkStyles={{
										'&:checked + span': {
											backgroundColor: textColor.dark
										}
									}}
									component={inputId => (
										<input
											id={inputId}
											type="checkbox"
											checked={checked}
											disabled={disabled}
											onChange={e => onChange(e.target.checked)}
										/>
									)}
								/>
								<Styled
									styles={{
										position: 'absolute',
										cursor: disabled ? 'not-allowed' : 'pointer',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										backgroundColor: borderColor.light,
										borderRadius: size.space,
										transition: 'background-color 0.2s',
										'&::before': {
											content: '""',
											position: 'absolute',
											height: `calc(${size.space} - 4px)`,
											width: `calc(${size.space} - 4px)`,
											left: '2px',
											bottom: '2px',
											backgroundColor: backgroundColor.light,
											borderRadius: '50%',
											transition: 'transform 0.2s'
										}
									}}
									darkStyles={{
										backgroundColor: borderColor.dark,
										'&::before': {
											backgroundColor: backgroundColor.dark
										}
									}}
									component={sliderId => <span id={sliderId} />}
								/>
							</div>
						)}
					/>
					<Styled
						styles={{
							color: textColor.light,
							fontSize: size.text,
							fontFamily: 'text'
						}}
						darkStyles={{
							color: textColor.dark
						}}
						component={labelId => <span id={labelId}>{label}</span>}
					/>
				</label>
			)}
		/>
	)
}

export function createToggle<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createToggleSchema()

	function useToggle({ label, defaultChecked = false, disabled }: z.infer<typeof schema>) {
		const [checked, setChecked] = useState(defaultChecked)

		const element = rawToggle({
			backgroundColor: colors.bg,
			textColor: colors.text,
			borderColor: colors.border,
			size: sizes.information,
			label,
			checked,
			disabled,
			onChange: setChecked
		})

		return [checked, element] as const
	}

	useToggle.schema = schema

	return useToggle
}
