import { Container } from './container'
import { Text } from './text'

export const ErrorState = ({ name, message }: { name: string; message: string }) => {
	return (
		<Container gap="sm" padding="md" border="all" className="bg-destructive/10">
			<Text bold>
				<span className="text-destructive">Error: {name}</span>
			</Text>
			<Text variant="secondary">
				<span className="text-destructive">{message}</span>
			</Text>
		</Container>
	)
}
