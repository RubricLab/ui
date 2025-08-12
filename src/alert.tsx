'use client'

export const Alert = ({
	title,
	description
}: {
	title: string
	description: string
}) => {
	return (
		<div className="border bg-destructive p-2">
			<p>{title}</p>
			<p>{description}</p>
		</div>
	)
}
