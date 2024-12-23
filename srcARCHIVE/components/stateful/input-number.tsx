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

export function createInputNumberSchema() {
	return z.object({
		min: z.number().optional(),
		max: z.number().optional(),
		step: z.number().optional(),
		defaultValue: z.number().optional(),
		placeholder: z.string().optional(),
		disabled: z.boolean().optional(),
		error: z.string().optional()
	})
}

export function rawInputNumber({
	backgroundColor,
	textColor,
	borderColor,
	errorColor,
	size,
	value,
	min,
	max,
	step = 1,
	placeholder,
	disabled = false,
	error,
	onChange
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	borderColor: { light: string; dark: string }
	errorColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	value: number | undefined
	min?: number
	max?: number
	step?: number
	placeholder?: string
	disabled?: boolean
	error?: string
	onChange: (value: number | undefined) => void
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
							gap: `calc(${size.space} * 0.5)`
						}}
						darkStyles={{}}
						component={wrapId => (
							<div id={wrapId}>
								<Styled
									styles={{
										backgroundColor: backgroundColor.light,
										color: textColor.light,
										padding: size.space,
										borderRadius: size.rounding,
										fontSize: size.text,
										fontFamily: 'text',
										border: `1px solid ${error ? errorColor.light : borderColor.light}`,
										width: '100%',
										opacity: disabled ? 0.5 : 1,
										'&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
											appearance: 'none',
											margin: 0
										}
									}}
									darkStyles={{
										backgroundColor: backgroundColor.dark,
										color: textColor.dark,
										borderColor: error ? errorColor.dark : borderColor.dark
									}}
									component={inputId => (
										<input
											id={inputId}
											type="number"
											value={value ?? ''}
											min={min}
											max={max}
											step={step}
											placeholder={placeholder}
											disabled={disabled}
											onChange={e => {
												const newValue = e.target.value === '' ? undefined : Number(e.target.value)
												if (newValue === undefined || !isNaN(newValue)) {
													onChange(newValue)
												}
											}}
										/>
									)}
								/>
								<Styled
									styles={{
										display: 'flex',
										flexDirection: 'column',
										gap: '1px'
									}}
									darkStyles={{}}
									component={buttonsId => (
										<div id={buttonsId}>
											{[
												{ label: '▲', action: () => value !== undefined && onChange(value + step) },
												{ label: '▼', action: () => value !== undefined && onChange(value - step) }
											].map(({ label, action }, index) => (
												<Styled
													key={index}
													styles={{
														backgroundColor: backgroundColor.light,
														color: textColor.light,
														border: `1px solid ${borderColor.light}`,
														borderRadius: size.rounding,
														width: size.space,
														height: `calc(${size.space} * 0.75)`,
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														cursor: disabled ? 'not-allowed' : 'pointer',
														opacity: disabled ? 0.5 : 1,
														fontSize: `calc(${size.text} * 0.75)`,
														userSelect: 'none',
														'&:hover': {
															backgroundColor: borderColor.light
														}
													}}
													darkStyles={{
														backgroundColor: backgroundColor.dark,
														color: textColor.dark,
														borderColor: borderColor.dark,
														'&:hover': {
															backgroundColor: borderColor.dark
														}
													}}
													component={buttonId => (
														<button id={buttonId} type="button" disabled={disabled} onClick={action}>
															{label}
														</button>
													)}
												/>
											))}
										</div>
									)}
								/>
							</div>
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

export function createInputNumber<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createInputNumberSchema()

	function useInputNumber({
		min,
		max,
		step,
		defaultValue,
		placeholder,
		disabled,
		error
	}: z.infer<typeof schema>) {
		const [value, setValue] = useState<number | undefined>(defaultValue)

		const element = rawInputNumber({
			backgroundColor: colors.bg,
			textColor: colors.text,
			borderColor: colors.border,
			errorColor: colors.error,
			size: sizes.information,
			value,
			min,
			max,
			step,
			placeholder,
			disabled,
			error,
			onChange: setValue
		})

		return [value, element] as const
	}

	useInputNumber.schema = schema

	return useInputNumber
}
