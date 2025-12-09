import { cn } from '../utils'
import { Container } from './container'

const JsonTree = ({ data, last = true }: { data: object; last?: boolean }) => {
	if (data === null) return <span className="text-muted-foreground">null</span>
	if (typeof data === 'boolean')
		return <span className="text-blue-600 dark:text-blue-400">{String(data)}</span>
	if (typeof data === 'number')
		return <span className="text-green-700 dark:text-green-500">{data}</span>
	if (typeof data === 'string')
		return <span className="wrap-break-word text-red-700 dark:text-red-500">"{data}"</span>

	if (Array.isArray(data)) {
		if (data.length === 0) return <span>[]</span>
		return (
			<span className="wrap-break-word">
				<span>[</span>
				{data.map((item, i) => (
					<div key={i} className="ml-4">
						<JsonTree data={item} last={i === data.length - 1} />
					</div>
				))}
				<span>]</span>
				<span>{!last ? ',' : ''}</span>
			</span>
		)
	}

	if (typeof data === 'object' && data !== null) {
		const entries = Object.entries(data)
		if (entries.length === 0) return <span>{'{}'}</span>

		return (
			<span className="wrap-break-word">
				<span>{'{'}</span>
				{entries.map(([key, value], i) => (
					<div key={key} className="ml-4">
						<span className="wrap-break-word text-blue-700 dark:text-blue-500">"{key}"</span>:{' '}
						<JsonTree data={value} last={i === entries.length - 1} />
					</div>
				))}
				<span>{'}'}</span>
				<span>{!last ? ',' : ''}</span>
			</span>
		)
	}

	return <span className="wrap-break-word">{String(data)}</span>
}

export const Code = ({ json, className }: { json: object; className?: string }) => {
	return (
		<Container height="full">
			<pre
				className={cn(
					'wrap-break-word w-full whitespace-pre-wrap rounded-default border bg-accent p-4 font-mono text-sm',
					className
				)}
			>
				<JsonTree data={json} />
			</pre>
		</Container>
	)
}
