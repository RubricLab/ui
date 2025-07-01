import type { HTMLAttributes, ReactNode } from 'react'
import styles from './code-block.module.css'

export type CodeBlockRole = 'code' | 'negative-diff' | 'positive-diff'
export type CodeBlockLanguage = 'javascript' | 'typescript' | 'html' | 'css' | 'json' | 'plain'

export interface CodeBlockProps extends Omit<HTMLAttributes<HTMLPreElement>, 'role'> {
	/** Visual style and behavior of the code block */
	ROLE: CodeBlockRole
	/** Programming language for syntax highlighting */
	language?: CodeBlockLanguage
	/** Code content */
	children: ReactNode
	/** Whether to show line numbers */
	showLineNumbers?: boolean
}

type Token = {
	type:
		| 'keyword'
		| 'string'
		| 'number'
		| 'function'
		| 'comment'
		| 'operator'
		| 'tag'
		| 'attr-name'
		| 'attr-value'
		| 'property'
		| 'value'
		| 'selector'
		| 'plain'
	content: string
}

function tokenize(code: string, language: CodeBlockLanguage): Token[] {
	if (language === 'plain') return [{ content: code, type: 'plain' }]

	const tokens: Token[] = []

	// Basic tokenization patterns
	const patterns = {
		css: [
			{ pattern: /[\w-]+(?=\s*:)/g, type: 'property' as const },
			{ pattern: /:\s*[^;]+/g, type: 'value' as const },
			{ pattern: /[^{]+(?={)/g, type: 'selector' as const }
		],
		html: [
			{ pattern: /<\/?[\w-]+/g, type: 'tag' as const },
			{ pattern: /\s[\w-]+(?=\s*=\s*["'])/g, type: 'attr-name' as const },
			{ pattern: /=\s*(["'])(?:(?!\1)[^\\]|\\.)*\1/g, type: 'attr-value' as const }
		],
		javascript: [
			{
				pattern:
					/\b(const|let|var|function|return|if|else|for|while|class|extends|import|export|default|from|async|await)\b/g,
				type: 'keyword' as const
			},
			{ pattern: /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, type: 'string' as const },
			{ pattern: /\b\d+\.?\d*\b/g, type: 'number' as const },
			{ pattern: /\b\w+(?=\s*\()/g, type: 'function' as const },
			{ pattern: /\/\/.*$|\/\*[\s\S]*?\*\//g, type: 'comment' as const },
			{ pattern: /[+\-*/%=<>!&|^~?:]+/g, type: 'operator' as const }
		],
		json: [
			{ pattern: /"[\w-]+"\s*:/g, type: 'property' as const },
			{ pattern: /:\s*(["'])(?:(?!\1)[^\\]|\\.)*\1/g, type: 'string' as const },
			{ pattern: /\b\d+\.?\d*\b/g, type: 'number' as const }
		],
		typescript: [
			{
				pattern:
					/\b(const|let|var|function|return|if|else|for|while|class|extends|import|export|default|from|async|await|type|interface|enum)\b/g,
				type: 'keyword' as const
			},
			{ pattern: /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, type: 'string' as const },
			{ pattern: /\b\d+\.?\d*\b/g, type: 'number' as const },
			{ pattern: /\b\w+(?=\s*\()/g, type: 'function' as const },
			{ pattern: /\/\/.*$|\/\*[\s\S]*?\*\//g, type: 'comment' as const },
			{ pattern: /[+\-*/%=<>!&|^~?:]+/g, type: 'operator' as const }
		]
	}

	const languagePatterns = patterns[language] || patterns.javascript
	let remaining = code

	while (remaining.length > 0) {
		let matched = false

		for (const { type, pattern } of languagePatterns) {
			pattern.lastIndex = 0
			const match = pattern.exec(remaining)

			if (match && match.index === 0) {
				tokens.push({ content: match[0], type })
				remaining = remaining.slice(match[0].length)
				matched = true
				break
			}
		}

		if (!matched && remaining.length > 0) {
			tokens.push({ content: remaining[0] || '', type: 'plain' })
			remaining = remaining.slice(1)
		}
	}

	return tokens
}

export default function CodeBlock({
	ROLE,
	language = 'plain',
	children,
	showLineNumbers = false,
	className,
	...props
}: CodeBlockProps) {
	const code = typeof children === 'string' ? children : ''
	const lines = code.split('\n')

	return (
		<pre
			className={`${styles[`code-block--${ROLE}`]} ${
				styles[`code-block--${language}` as keyof typeof styles] || ''
			} ${showLineNumbers ? styles['code-block--line-numbers'] : ''} ${className || ''}`}
			{...props}
		>
			<code>
				{lines.map((line, index) => {
					const tokens = tokenize(line, language)
					return (
						<span key={index}>
							{tokens.map((token, tokenIndex) => (
								<span
									key={tokenIndex}
									className={styles[`token--${token.type}` as keyof typeof styles] || ''}
								>
									{token.content}
								</span>
							))}
						</span>
					)
				})}
			</code>
		</pre>
	)
}
