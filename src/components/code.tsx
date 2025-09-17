import { Container } from './container'

const JsonTree = ({ data }: { data: unknown }) => {
	if (data === null) return <span className="text-muted-foreground">null</span>
	if (typeof data === 'boolean')
		return <span className="text-blue-600 dark:text-blue-400">{String(data)}</span>
	if (typeof data === 'number')
		return <span className="text-green-700 dark:text-green-500">{data}</span>
	if (typeof data === 'string')
		return <span className="break-words text-red-700 dark:text-red-500">"{data}"</span>

	if (Array.isArray(data)) {
		if (data.length === 0) return <span>[]</span>
		return (
			<div className="break-words">
				<span>[</span>
				{data.map((item, i) => (
					<div key={i} className="ml-6">
						<JsonTree data={item} />
						{i < data.length - 1 && ','}
					</div>
				))}
				<span>]</span>
			</div>
		)
	}

	if (typeof data === 'object' && data !== null) {
		const entries = Object.entries(data)
		if (entries.length === 0) return <span>{'{}'}</span>

		return (
			<div className="break-words">
				<span>{'{'}</span>
				{entries.map(([key, value], i) => (
					<div key={key} className="ml-6">
						<span className="break-words text-blue-700 dark:text-blue-500">"{key}"</span>:{' '}
						<JsonTree data={value} />
						{i < entries.length - 1 && ','}
					</div>
				))}
				<span>{'}'}</span>
			</div>
		)
	}

	return <span className="break-words">{String(data)}</span>
}

export const Code = ({ json }: { json: unknown }) => {
	return (
		<Container height="full">
			<pre className="w-full whitespace-pre-wrap break-words rounded-default border p-4 font-mono text-sm">
				<JsonTree data={json} />
			</pre>
		</Container>
	)
}
