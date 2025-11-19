import { cn } from '../utils'
import { Container } from './container'
import { Text } from './text'

export const Loader = ({ body = 'Loading', className }: { body?: string; className?: string }) => {
	return (
		<Container
			height="fit"
			width="full"
			padding="sm"
			className={cn('animate-pulse bg-accent', className)}
		>
			{body && <Text>{body}</Text>}
		</Container>
	)
}
