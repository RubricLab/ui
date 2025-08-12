export const camelToPascal = (input: string): string => {
	if (!input) return ''
	return input.charAt(0).toUpperCase() + input.slice(1)
}

export const camelToReadable = ({
	input,
	capitalize = false
}: { input: string; capitalize?: boolean }): string => {
	if (!input) return ''

	// Add space before capital letters and convert to lowercase
	const withSpaces = input.replace(/([A-Z])/g, ' $1').toLowerCase()

	// Capitalize first letter
	const result = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)

	// If capitalize is true, capitalize first letter of each word
	return capitalize
		? result
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ')
		: result
}

export const kebabToReadable = ({
	input,
	capitalize = false
}: { input: string; capitalize?: boolean }): string => {
	if (!input) return ''

	// Split on hyphens and join with spaces
	const withSpaces = input.split('-').join(' ').toLowerCase()

	// Capitalize first letter
	const result = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)

	// If capitalize is true, capitalize first letter of each word
	return capitalize
		? result
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ')
		: result
}

export const capitalize = (input: string): string => {
	if (!input || input.length === 0) return ''
	return input.charAt(0).toUpperCase() + input.slice(1)
}

// Transform functions to convert between array and object formats
export const arrayToObject = (
	params: { key: string; value: string | number | boolean }[]
): Record<string, unknown> => {
	return params.reduce(
		(acc, { key, value }) => {
			acc[key] = value
			return acc
		},
		{} as Record<string, unknown>
	)
}

export const objectToArray = (
	params: Record<string, unknown>
): { key: string; value: string | number | boolean }[] => {
	return Object.entries(params).map(([key, value]) => ({
		key,
		value: value as string | number | boolean
	}))
}
