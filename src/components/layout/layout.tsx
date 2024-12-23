import { z } from 'zod'

import { Fonts } from '../../fonts'
import { styled } from '../../styled'
import type { DesignSystem } from '../../types'
import { createLayoutComponent } from '../../utils'

export function createLayout(ds: DesignSystem) {
	return createLayoutComponent({
		createSchema: () => z.object({}),
		render: ({ props: { children } }) => (
			<html lang="en" style={{ margin: 0, padding: 0, height: '100%' }}>
				<body style={{ margin: 0, padding: 0, height: '100%' }}>
					<Fonts fonts={ds.fonts} />
					<styled.html ds={ds} lang="en">
						<styled.body ds={ds}>{children}</styled.body>
					</styled.html>
				</body>
			</html>
		)
	})(ds)
}
