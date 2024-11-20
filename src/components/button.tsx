import { z } from 'zod'
import type { IconsConfig } from '~/types'
import { getTupleFromObjectKeys } from '~/utils'

export function createButton<Icons extends IconsConfig>({ icons }: { icons: Icons }) {
	const schema = z.object({
		icon: z.enum(getTupleFromObjectKeys(icons))
	})

	const component = ({ icon }: z.infer<typeof schema>) => (
		<button type="button">{icon ? icons[icon].light() : ''}</button>
	)

	component.schema = schema

	return component
}
