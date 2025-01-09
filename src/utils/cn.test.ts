import { expect, it } from 'bun:test'
import { cn } from './cn'

it('should join class names', () => {
	expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz')
})

it('should ignore undefined values', () => {
	expect(cn('foo', undefined, 'bar')).toBe('foo bar')
})

it('should ignore empty strings', () => {
	expect(cn('foo', '', 'bar')).toBe('foo bar')
})

it('should ignore null values', () => {
	expect(cn('foo', null, 'bar')).toBe('foo bar')
})

it('should handle object values', () => {
	expect(cn('foo', { bar: true }, { baz: false })).toBe('foo bar')
})
