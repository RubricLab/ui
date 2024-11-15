import type { DesignSystem, Route } from '../types'
import { createComponent } from '../utils'
import { Styled } from '../utils/styled'
import Icon from './icon'

type NavProps = {
	routes: Route[]
}

export default createComponent<DesignSystem, NavProps>({
	render: ({ routes }, ui) => {
		const startRoutes = routes.filter(route => !route.end)
		const endRoutes = routes.filter(route => route.end)

		const color = ui.colors.secondary

		const size = ui.sizing.medium

		if (!color || !size) {
			throw ''
		}

		const IconComponent = Icon(ui)

		return (
			<Styled
				styles={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: size.space,
					backgroundColor: color.bg.light,
					padding: size.space,
					fontFamily: 'sans-serif',
					alignItems: 'center'
				}}
				darkStyles={{
					backgroundColor: ui.colors.secondary?.bg.dark,
					color: ui.colors.secondary?.text.dark
				}}
				component={id => (
					<div id={id}>
						<div style={{ display: 'flex', gap: size.space }}>
							{startRoutes.map(route => (
								<a
									key={route.route}
									href={route.route}
									style={{
										color: 'inherit',
										textDecoration: 'none',
										display: 'flex',
										alignItems: 'center'
									}}
								>
									<IconComponent size="lg" icon={'logo'} />
									{route.title}
								</a>
							))}
						</div>
						<div style={{ display: 'flex', gap: size.space }}>
							{endRoutes.map(({ title, route, action }) => {
								return route ? (
									<a
										key={title}
										href={route}
										style={{
											color: 'inherit',
											textDecoration: 'none'
										}}
									>
										{title}
									</a>
								) : (
									// <button key={title} formAction={action}>
									// 	{title}
									// </button>
									<button type="button" key={title} onClick={action}>
										{title}
									</button>
								)
							})}
						</div>
					</div>
				)}
			/>
		)
	}
})
