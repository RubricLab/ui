export function cn(...args: Array<string | undefined | null | Record<string, boolean> | boolean>) {
	const classes: string[] = []

	for (const arg of args) {
		if (typeof arg === 'string') {
			if (arg.trim()) {
				classes.push(arg.trim())
			}
		} else if (typeof arg === 'object' && arg !== null) {
			for (const [key, value] of Object.entries(arg)) {
				if (value) classes.push(key)
			}
		}
	}

	// Remove duplicates
	return Array.from(new Set(classes)).join(' ')
}
