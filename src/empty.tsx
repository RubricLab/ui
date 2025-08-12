'use client'

import { Text } from './text'

export const Empty = ({ body = 'No items' }: { body?: string }) => {
	return (
		<Text size="sm" variant="muted">
			{body}
		</Text>
	)
}
