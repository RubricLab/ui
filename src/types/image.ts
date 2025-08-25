import { z } from 'zod/v4'
import { SizeEnum } from './general'

export const ImagePropsSchema = z.object({
	alt: z.string(),
	height: z.number().default(400),
	rounded: SizeEnum.default('none'),
	src: z.string(),
	width: z.number().default(800)
})

export type ImageProps = {
	src: string
	alt: string
	width: number
	height: number
	rounded?: z.infer<typeof SizeEnum>
}
