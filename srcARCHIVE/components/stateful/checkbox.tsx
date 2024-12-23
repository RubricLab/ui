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

export function createCheckboxSchema() {
	return z.object({
		label: z.string(),
		defaultChecked: z.boolean().optional(),
		disabled: z.boolean().optional(),
		error: z.string().optional()
	})
}

export function rawCheckbox({
	backgroundColor,
	textColor,
	borderColor,
	errorColor,
	size,
	label,
	checked,
	disabled = false,
	error,
	onChange
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	borderColor: { light: string; dark: string }
	errorColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	label: string
	checked: boolean
	disabled?: boolean
	error?: string
	onChange: (checked: boolean) => void
}) {
	return (
		<Styled
			styles={{
				display: 'flex',
				flexDirection: 'column',
				gap: size.space
			}}
			darkStyles={{}}
			component={containerId => (
				<div id={containerId}>
					<Styled
						styles={{
							display: 'flex',
							alignItems: 'center',
							gap: size.space,
							opacity: disabled ? 0.5 : 1,
							cursor: disabled ? 'not-allowed' : 'pointer'
						}}
						darkStyles={{}}
						component={wrapId => (
							<label id={wrapId}>
								<Styled
									styles={{
										appearance: 'none',
										width: size.space,
										height: size.space,
										backgroundColor: backgroundColor.light,
										border: `1px solid ${error ? errorColor.light : borderColor.light}`,
										borderRadius: size.rounding,
										display: 'grid',
										placeContent: 'center',
										'&:checked': {
											backgroundColor: textColor.light,
											borderColor: textColor.light,
											'&::before': {
												content: '""',
												width: `calc(${size.space} * 0.5)`,
												height: `calc(${size.space} * 0.5)`,
												transform: 'scale(1)',
												backgroundColor: backgroundColor.light,
												clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)'
											}
										}
									}}
									darkStyles={{
										backgroundColor: backgroundColor.dark,
										borderColor: error ? errorColor.dark : borderColor.dark,
										'&:checked': {
											backgroundColor: textColor.dark,
											borderColor: textColor.dark,
											'&::before': {
												backgroundColor: backgroundColor.dark
											}
										}
									}}
									component={checkboxId => (
										<input
											id={checkboxId}
											type="checkbox"
											checked={checked}
											disabled={disabled}
											onChange={e => onChange(e.target.checked)}
										/>
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
					{error && (
						<Styled
							styles={{
								color: errorColor.light,
								fontSize: `calc(${size.text} * 0.875)`,
								fontFamily: 'text'
							}}
							darkStyles={{
								color: errorColor.dark
							}}
							component={errorId => <div id={errorId}>{error}</div>}
						/>
					)}
				</div>
			)}
		/>
	)
}

export function createCheckbox<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createCheckboxSchema()

	function useCheckbox({ label, defaultChecked = false, disabled, error }: z.infer<typeof schema>) {
		const [checked, setChecked] = useState(defaultChecked)

		const element = rawCheckbox({
			backgroundColor: colors.bg,
			textColor: colors.text,
			borderColor: colors.border,
			errorColor: colors.error,
			size: sizes.information,
			label,
			checked,
			disabled: disabled ?? false,
			error: error ?? '',
			onChange: setChecked
		})

		return [checked, element] as const
	}

	useCheckbox.schema = schema

	return useCheckbox
}
