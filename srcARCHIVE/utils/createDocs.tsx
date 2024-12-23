import type { ReactElement } from 'react'
import type { ComponentLibrary } from '..'

function PropDoc({ name, schema }: { name: string; schema: any }) {
	const isRequired = !schema._def.isOptional
	const type =
		schema._def.typeName === 'ZodEnum'
			? schema._def.values.join(' | ')
			: schema._def.typeName.replace('Zod', '').toLowerCase()

	return (
		<div style={{ marginBottom: '0.5rem' }}>
			<code>
				{name}
				{isRequired ? '' : '?'}: {type}
			</code>
		</div>
	)
}

function ComponentDoc({ name, component }: { name: string; component: any }) {
	return (
		<div>
			<h2>{name}</h2>
			<h3>Example:</h3>
			<div>{component(component.example)}</div>

			<h3>Props:</h3>
			<div>
				{Object.entries(component.schema.shape).map(([name, schema]) => (
					<PropDoc key={name} name={name} schema={schema} />
				))}
			</div>
		</div>
	)
}

export function createDocs(components: ComponentLibrary): () => ReactElement {
	return () => (
		<div>
			<h1>Components</h1>
			{Object.entries(components).map(([name, component]) => (
				<ComponentDoc key={name} name={name} component={component} />
			))}
		</div>
	)
}
