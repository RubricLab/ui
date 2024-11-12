'use client'

type NavProps = {
	routes: {
		title: string
		route: `/${string}`
		end?: boolean
	}[]
}

export default function Nav({ routes }: NavProps) {
	const startRoutes = routes.filter(route => !route.end)
	const endRoutes = routes.filter(route => route.end)

	return (
		<div className="flex justify-between gap-4 bg-neutral-100 p-4 dark:bg-neutral-900">
			<div className="flex gap-4">
				{startRoutes.map(route => (
					<a key={route.route} href={route.route} className="text-black dark:text-white">
						{route.title}
					</a>
				))}
			</div>
			<div className="flex gap-4">
				{endRoutes.map(route => (
					<a key={route.route} href={route.route} className="text-black dark:text-white">
						{route.title}
					</a>
				))}
			</div>
		</div>
	)
}
