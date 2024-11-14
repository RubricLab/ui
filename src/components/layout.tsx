import type { ReactElement } from 'react'

type LayoutProps = { page: ReactElement }

export default function Layout({ page }: LayoutProps) {
	return (
		<html
			lang="en"
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				margin: 0,
				padding: 0
			}}
		>
			<body style={{ height: '100%', width: '100%', margin: 0, padding: 0 }}>{page}</body>
		</html>
	)
}
