// media-primitives.tsx

import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ----------------------------------------------------------------------------
   1) Image
   - A styled <img> referencing DS tokens for default sizing, etc.
   - You can add first-class props like "objectFit", "width", "height".
----------------------------------------------------------------------------- */
interface ImageProps {
	ds: DesignSystem
	/** Standard `src`, `alt` required for <img> usage */
	src: string
	alt: string
	/** Possibly a DS-based default width/height, or custom strings */
	width?: string
	height?: string
	overrides?: Partial<AllStates>
	attributes?: React.ImgHTMLAttributes<HTMLImageElement>
}

export function Image({
	ds,
	src,
	alt,
	width = 'auto',
	height = 'auto',
	overrides,
	attributes
}: ImageProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			maxWidth: '100%',
			height: 'auto',
			boxSizing: 'border-box'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledImage = createStyledComponent<Pick<ImageProps, 'ds' | 'attributes'>, 'img'>(
		'img',
		() => styleDef
	)

	return (
		<StyledImage ds={ds} src={src} alt={alt} width={width} height={height} {...(attributes || {})} />
	)
}

/* ----------------------------------------------------------------------------
   2) Video
   - A styled <video> for embedding videos. We can pass controls, autoPlay, etc.
----------------------------------------------------------------------------- */
interface VideoProps {
	ds: DesignSystem
	/** If you want to specify a default width/height from DS or custom */
	width?: string
	height?: string
	overrides?: Partial<AllStates>
	attributes?: React.VideoHTMLAttributes<HTMLVideoElement>
}

export function Video({ ds, width = '100%', height = 'auto', overrides, attributes }: VideoProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			boxSizing: 'border-box',
			width,
			height
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledVideo = createStyledComponent<Pick<VideoProps, 'ds' | 'attributes'>, 'video'>(
		'video',
		() => styleDef
	)

	return <StyledVideo ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   3) Audio
   - A styled <audio> element. Typically just audio controls.
----------------------------------------------------------------------------- */
interface AudioProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.AudioHTMLAttributes<HTMLAudioElement>
}

export function Audio({ ds, overrides, attributes }: AudioProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			boxSizing: 'border-box'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledAudio = createStyledComponent<Pick<AudioProps, 'ds' | 'attributes'>, 'audio'>(
		'audio',
		() => styleDef
	)

	return <StyledAudio ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   4) Canvas
   - A styled <canvas> for drawing. DS references might be minimal unless
     you need a specific background color or border from DS.
----------------------------------------------------------------------------- */
interface CanvasProps {
	ds: DesignSystem
	width?: number
	height?: number
	overrides?: Partial<AllStates>
	attributes?: React.CanvasHTMLAttributes<HTMLCanvasElement>
}

export function Canvas({ ds, width, height, overrides, attributes }: CanvasProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			boxSizing: 'border-box',
			backgroundColor: ds.colors.bg.light
		},
		dark: {
			backgroundColor: ds.colors.bg.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledCanvas = createStyledComponent<Pick<CanvasProps, 'ds' | 'attributes'>, 'canvas'>(
		'canvas',
		() => styleDef
	)

	return <StyledCanvas ds={ds} width={width} height={height} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   5) Svg
   - A styled <svg> if you want to directly embed inline SVG. 
   - For icons, you might use the DS icon approach. 
   - This is for raw custom SVG usage or dynamic drawings.
----------------------------------------------------------------------------- */
interface SvgProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.SVGProps<SVGSVGElement>
}

export function Svg({ ds, overrides, attributes }: SvgProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			boxSizing: 'border-box'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSvg = createStyledComponent<Pick<SvgProps, 'ds' | 'attributes'>, 'svg'>(
		'svg',
		() => styleDef
	)

	return <StyledSvg ds={ds} {...(attributes || {})} />
}
