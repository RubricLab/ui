import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent } from '../../utils'

export function createLogo(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: () =>
			z.object({
				variant: z.enum(['icon', 'wordMark']),
				href: z.string().optional(),
				size: z.enum(['small', 'medium', 'large']).default('medium')
			}),
		render: ({ props: { href, size } }) => {
			const logo = (
				<Styled.Icon
					ds={ds}
					// icon={ds.logos[variant].light()}
					overrides={{
						base: {
							width: size === 'small' ? '24px' : size === 'medium' ? '32px' : '48px',
							height: size === 'small' ? '24px' : size === 'medium' ? '32px' : '48px'
						}
					}}
				/>
			)

			if (href) {
				return (
					<Styled.Link
						ds={ds}
						href={href}
						overrides={{
							base: {
								display: 'inline-flex',
								alignItems: 'center',
								textDecoration: 'none'
							},
							hover: {
								textDecoration: 'none'
							}
						}}
						attributes={{
							children: logo
						}}
					/>
				)
			}

			return logo
		}
	})(ds)
}
