import { z } from 'zod/v4'

const ChartVariantEnum = z.enum(['bar', 'line'])

// TODO: these schemas could be better
// Not sure if the following structure for DataPointSchema is the best
export const DataPointSchema = z.object({
	x: z.string(),
	y: z.array(
		z.object({
			series: z.string(),
			value: z.number()
		})
	)
})

export const ChartPropsSchema = z.object({
	data: z.array(DataPointSchema),
	height: z.number().default(200),
	title: z.string().nullable(),
	variant: ChartVariantEnum.default('line'),
	width: z.number().default(400)
})

export type DataPoint = z.infer<typeof DataPointSchema>

export type ChartProps = {
	data: DataPoint[]
	title?: string
	variant?: z.infer<typeof ChartVariantEnum>
	height?: number
	width?: number
}
