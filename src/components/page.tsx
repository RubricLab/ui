import type { ReactElement } from 'react'

type PageProps = { content: ReactElement }

export default function Page({ content }: PageProps) {
	return <div className="p-2">{content}</div>
}
