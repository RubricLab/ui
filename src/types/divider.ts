import { z } from 'zod/v4'
import { DirectionEnum } from './general'

export const DividerPropsSchema = z.object({ direction: DirectionEnum.nullable() })

export type DividerProps = {
	direction?: z.infer<typeof DirectionEnum>
	className?: string // additional
}
