import { z } from 'zod/v4'
import type { IconNames } from './icon'

type PascalToCamel<T extends string> = T extends `${infer First}${infer Rest}`
	? `${Lowercase<First>}${Rest}`
	: T

// TODO: add all icon support
export const IconEnum = z.enum([
	'arrowLeft',
	'arrowRight',
	'arrowUp',
	'arrowUpRight',
	'bold',
	'braces',
	'brush',
	'building',
	'captions',
	'check',
	'chevronDown',
	'chevronRight',
	'chevronUp',
	'chevronsUpDown',
	'code',
	'code2',
	'contact',
	'copy',
	'creditCard',
	'download',
	'ellipsis',
	'ellipsisVertical',
	'externalLink',
	'house',
	'instagram',
	'italic',
	'link',
	'link2',
	'list',
	'listOrdered',
	'loader',
	'mail',
	'maximize',
	'messageSquare',
	'minimize',
	'minus',
	'move',
	'pencil',
	'phoneIncoming',
	'pause',
	'play',
	'plus',
	'quote',
	'redo2',
	'rotateCcw',
	'settings',
	'strikethrough',
	'trash',
	'undo2',
	'users',
	'x'
] satisfies PascalToCamel<IconNames>[])

export const BorderEnum = z.enum([
	'horizontal',
	'vertical',
	'left',
	'right',
	'top',
	'bottom',
	'all',
	'none'
])

export const VariantEnum = z.enum(['primary', 'secondary', 'outline', 'ghost', 'destructive'])

export const ArrangementEnum = z.enum(['row', 'column'])

export const DirectionEnum = z.enum(['vertical', 'horizontal'])

export const SizeEnum = z.enum(['none', 'xs', 'sm', 'md', 'lg', 'xl'])

export const RoundedEnum = z.enum(['none', 'xs', 'sm', 'default', 'md', 'lg', 'xl'])

export const JustifyEnum = z.enum(['start', 'center', 'end', 'between', 'around', 'evenly'])

export const AlignEnum = z.enum(['start', 'center', 'end', 'stretch', 'baseline'])

export const DimensionEnum = z.enum(['fit', 'full', 'screen'])

export const HeightEnum = z.enum([
	'3xs',
	'2xs',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'fit',
	'full',
	'screen'
])

export const WidthEnum = z.enum([
	'3xs',
	'2xs',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'fit',
	'full',
	'screen'
])

export const OverflowEnum = z.enum(['visible', 'hidden', 'scroll', 'auto'])

// Determines how flex items wrap within a flex container
export const WrapEnum = z.enum(['wrap', 'nowrap', 'wrap-reverse'])

export const TextVariantEnum = z.enum(['primary', 'secondary', 'tertiary', 'muted'])

export const FontEnum = z.enum(['sans', 'mono', 'serif'])
