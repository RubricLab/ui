import { cn } from '../utils'
import { Text } from './text'

export const Empty = ({ body = 'No items', className }: { body?: string; className?: string }) => {
	return (
		<Text size="sm" variant="muted" className={cn(className)}>
			{body}
		</Text>
	)
}
