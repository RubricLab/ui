import type { ReactElement } from 'react'

type LayoutProps = { page: ReactElement }

export default function Layout({ page }: LayoutProps) {
	return (
		<html className="flex h-full w-full items-center justify-center bg-white dark:bg-black" lang="en">
			<body className="h-full w-full">{page}</body>
		</html>
	)
}
