import { z } from 'zod/v4'
import { DirectionEnum } from './general'

export const DividerPropsSchema = z.object({ direction: DirectionEnum.default('vertical') })

export type DividerProps = z.infer<typeof DividerPropsSchema>
