import type { Route } from '~/types'

type NavProps = {
	routes: Route[]
}

export default function Nav({ routes }: NavProps) {
	const startRoutes = routes.filter(route => !route.end)
	const endRoutes = routes.filter(route => route.end)

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				gap: '16px',
				backgroundColor: '#f5f5f5',
				padding: '16px',
				fontFamily: 'sans-serif'
			}}
		>
			<div style={{ display: 'flex', gap: '16px' }}>
				{startRoutes.map(route => (
					<a key={route.route} href={route.route} style={{ color: 'black' }}>
						{route.title}
					</a>
				))}
			</div>
			<div style={{ display: 'flex', gap: '16px' }}>
				{endRoutes.map(route => (
					<a key={route.route} href={route.route} style={{ color: 'black' }}>
						{route.title}
					</a>
				))}
			</div>
		</div>
	)
}
