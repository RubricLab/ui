import { Container } from './container'
import { Text } from './text'

export const ErrorState = ({
	name,
	message
}: {
	name: string
	message: string
}) => {
	return (
		<Container gap="sm" padding="md">
			<Text bold>{name}</Text>
			<Text variant="secondary">{message}</Text>
		</Container>
	)
}
