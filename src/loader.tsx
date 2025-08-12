'use client'

import { Container } from './container'
import { Text } from './text'

export const Loader = ({ body = 'Loading' }: { body?: string }) => {
	return (
		<Container height="fit" width="full" padding="sm" className="animate-pulse bg-accent">
			{body && <Text>{body}</Text>}
		</Container>
	)
}
