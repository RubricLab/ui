import { cn } from '../utils'

export const Alert = ({
	title,
	description,
	className
}: {
	title: string
	description: string
	className?: string
}) => {
	return (
		<div className={cn('rounded-default border bg-destructive p-2', className)}>
			<p>{title}</p>
			<p>{description}</p>
		</div>
	)
}
