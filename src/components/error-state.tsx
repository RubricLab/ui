import { cn } from '../utils'
import { Container } from './container'
import { Text } from './text'

export const ErrorState = ({
	name,
	message,
	className
}: {
	name: string
	message: string
	className?: string
}) => {
	return (
		<Container gap="sm" padding="md" border="all" className={cn('bg-destructive/10', className)}>
			<Text bold>
				<span className="text-destructive">Error: {name}</span>
			</Text>
			<Text variant="secondary">
				<span className="text-destructive">{message}</span>
			</Text>
		</Container>
	)
}
