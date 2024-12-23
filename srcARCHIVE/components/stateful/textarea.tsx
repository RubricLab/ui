import { useEffect, useRef, useState } from 'react'
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

export function createTextareaSchema() {
	return z.object({
		placeholder: z.string().optional(),
		defaultValue: z.string().optional(),
		minRows: z.number().optional(),
		maxRows: z.number().optional(),
		disabled: z.boolean().optional(),
		error: z.string().optional()
	})
}

export function rawTextarea({
	backgroundColor,
	textColor,
	borderColor,
	errorColor,
	size,
	value,
	placeholder,
	minRows = 3,
	maxRows = 10,
	disabled = false,
	error,
	onChange
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	borderColor: { light: string; dark: string }
	errorColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	value: string
	placeholder?: string
	minRows?: number
	maxRows?: number
	disabled?: boolean
	error?: string
	onChange: (value: string) => void
}) {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		const textarea = textareaRef.current
		if (!textarea) return

		const computedStyle = window.getComputedStyle(textarea)
		const lineHeight = Number.parseInt(computedStyle.lineHeight)

		textarea.style.height = 'auto'
		const scrollHeight = textarea.scrollHeight
		const rows = Math.min(Math.max(Math.ceil(scrollHeight / lineHeight), minRows), maxRows)
		textarea.style.height = `${rows * lineHeight}px`
	}, [value, minRows, maxRows])

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
							backgroundColor: backgroundColor.light,
							color: textColor.light,
							padding: size.space,
							borderRadius: size.rounding,
							fontSize: size.text,
							fontFamily: 'text',
							border: `1px solid ${error ? errorColor.light : borderColor.light}`,
							width: '100%',
							resize: 'none',
							opacity: disabled ? 0.5 : 1
						}}
						darkStyles={{
							backgroundColor: backgroundColor.dark,
							color: textColor.dark,
							borderColor: error ? errorColor.dark : borderColor.dark
						}}
						component={textareaId => (
							<textarea
								ref={textareaRef}
								id={textareaId}
								value={value}
								placeholder={placeholder}
								disabled={disabled}
								onChange={e => onChange(e.target.value)}
								rows={minRows}
							/>
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

export function createTextarea<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createTextareaSchema()

	function useTextarea({
		placeholder,
		defaultValue = '',
		minRows,
		maxRows,
		disabled,
		error
	}: z.infer<typeof schema>) {
		const [value, setValue] = useState(defaultValue)

		const element = rawTextarea({
			backgroundColor: colors.bg,
			textColor: colors.text,
			borderColor: colors.border,
			errorColor: colors.error,
			size: sizes.information,
			value,
			placeholder,
			minRows,
			maxRows,
			disabled,
			error,
			onChange: setValue
		})

		return [value, element] as const
	}

	useTextarea.schema = schema

	return useTextarea
}
