import { z } from 'zod/v4'
import { SizeEnum } from './general'

export const ImagePropsSchema = z.object({
	src: z.string(),
	alt: z.string(),
	width: z.number().default(800),
	height: z.number().default(400),
	rounded: SizeEnum.default('none')
})

export type ImageProps = {
	src: string
	alt: string
	width: number
	height: number
	rounded?: z.infer<typeof SizeEnum>
}
