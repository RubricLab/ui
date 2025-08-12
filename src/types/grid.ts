import { z } from 'zod/v4'
import { DimensionEnum, SizeEnum, WidthEnum } from './general'

export const GridPropsSchema = z.object({
	rows: z.int().min(0),
	columns: z.int().min(0),
	gap: SizeEnum.default('xs'),
	height: DimensionEnum.default('fit'),
	width: WidthEnum.default('full')
})

export type GridProps = {
	children: React.ReactNode
	rows?: number
	columns?: number
	gap?: z.infer<typeof SizeEnum>
	height?: z.infer<typeof DimensionEnum>
	width?: z.infer<typeof WidthEnum>
}
