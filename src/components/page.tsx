import type { ReactElement } from 'react'

type PageProps = { content: ReactElement }

export default function Page({ content }: PageProps) {
	return <div style={{ padding: '0.5rem' }}>{content}</div>
}
