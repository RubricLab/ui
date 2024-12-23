import { useState } from 'react'
import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../../types'
import { Styled } from '../../utils/styled'

type RadioOption<T> = {
	value: T
	label: string
}

export function rawRadio<T>({
	backgroundColor,
	textColor,
	borderColor,
	errorColor,
	size,
	options,
	value,
	disabled = false,
	error,
	onChange,
	name
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	borderColor: { light: string; dark: string }
	errorColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	options: readonly RadioOption<T>[]
	value: T | undefined
	disabled?: boolean
	error?: string
	onChange: (value: T) => void
	name: string
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
							flexDirection: 'column',
							gap: `calc(${size.space} * 0.5)`,
							opacity: disabled ? 0.5 : 1
						}}
						darkStyles={{}}
						component={groupId => (
							<div id={groupId} role="radiogroup">
								{options.map((option, index) => (
									<Styled
										key={index}
										styles={{
											display: 'flex',
											alignItems: 'center',
											gap: size.space,
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
														borderRadius: '50%',
														display: 'grid',
														placeContent: 'center',
														'&:checked': {
															borderColor: textColor.light,
															'&::before': {
																content: '""',
																width: `calc(${size.space} * 0.5)`,
																height: `calc(${size.space} * 0.5)`,
																borderRadius: '50%',
																transform: 'scale(1)',
																backgroundColor: textColor.light
															}
														}
													}}
													darkStyles={{
														backgroundColor: backgroundColor.dark,
														borderColor: error ? errorColor.dark : borderColor.dark,
														'&:checked': {
															borderColor: textColor.dark,
															'&::before': {
																backgroundColor: textColor.dark
															}
														}
													}}
													component={radioId => (
														<input
															id={radioId}
															type="radio"
															name={name}
															checked={value === option.value}
															disabled={disabled}
															onChange={() => onChange(option.value)}
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
													component={labelId => <span id={labelId}>{option.label}</span>}
												/>
											</label>
										)}
									/>
								))}
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

export function createRadio<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds

	return function useRadio<T>({
		options,
		defaultValue,
		disabled,
		error
	}: {
		options: readonly RadioOption<T>[]
		defaultValue?: T
		disabled?: boolean
		error?: string
	}) {
		const [value, setValue] = useState<T | undefined>(defaultValue)
		const name = Math.random().toString(36).slice(2)

		const element = rawRadio({
			backgroundColor: colors.bg,
			textColor: colors.text,
			borderColor: colors.border,
			errorColor: colors.error,
			size: sizes.information,
			options,
			value,
			disabled,
			error,
			onChange: setValue,
			name
		})

		return [value, element] as const
	}
}
