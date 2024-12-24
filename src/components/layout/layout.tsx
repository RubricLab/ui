import { z } from 'zod'
import { Fonts } from '../../fonts'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createLayoutComponent } from '../../utils'

export function createLayout(ds: DesignSystem) {
	return createLayoutComponent({
		createSchema: () => z.object({}),
		render: ({ props: { children } }) => (
			<html lang="en" style={{ margin: 0, padding: 0, height: '100%' }}>
				<body style={{ margin: 0, padding: 0, height: '100%' }}>
					<Styled.Box
						ds={ds}
						overrides={{
							base: {
								margin: 0,
								padding: 0,
								minHeight: '100vh',
								fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
								fontSize: ds.sizes.content.text,
								lineHeight: 1.5,
								backgroundColor: ds.colors.bg.light,
								color: ds.colors.text.light
							},
							dark: {
								backgroundColor: ds.colors.bg.dark,
								color: ds.colors.text.dark
							}
						}}
						attributes={{
							children: (
								<>
									<Fonts fonts={ds.fonts} />
									{children}
								</>
							)
						}}
					/>
				</body>
			</html>
		)
	})(ds)
}
