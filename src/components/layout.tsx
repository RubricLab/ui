import type { ReactElement } from 'react'
import type { DesignSystem } from '../types'
import { createComponent } from '../utils'
import { Styled } from '../utils/styled'

type LayoutProps = { page: ReactElement }

export default createComponent<DesignSystem, LayoutProps>({
	render: ({ page }, ui) => {
		return (
			<html lang="en" style={{ height: '100%' }}>
				<body style={{ margin: 0, padding: 0, height: '100%' }}>
					<Styled
						styles={{
							display: 'flex',
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							margin: 0,
							padding: 0,
							backgroundColor: ui.colors.primary?.bg.light
						}}
						darkStyles={{
							backgroundColor: ui.colors.primary?.bg.dark
						}}
						component={id => (
							<div id={id}>
								<div style={{ height: '100%', width: '100%' }}>{page}</div>
							</div>
						)}
					/>
				</body>
			</html>
		)
	}
})
