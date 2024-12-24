import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent } from '../../utils'

export function createSidebar(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: () =>
			z.object({
				children: z.custom<React.ReactNode>(),
				content: z.custom<React.ReactNode>(),
				isCollapsed: z.boolean().default(false),
				width: z.string().default('300px'),

				onCollapsedChange: z.function().args(z.boolean()).returns(z.void()).optional(),
				onWidthChange: z.function().args(z.string()).returns(z.void()).optional()
			}),
		render: ({
			props: { children, content, isCollapsed, width, onCollapsedChange, onWidthChange }
		}) => {
			const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
				if (onWidthChange) {
					onWidthChange(`${e.currentTarget.offsetWidth}px`)
				}
			}

			return (
				<Styled.Flex
					ds={ds}
					direction="row"
					attributes={{
						style: { minHeight: '100vh' },
						children: (
							<>
								{/* Sidebar */}
								<Styled.Sidebar
									ds={ds}
									width={width}
									attributes={{
										onMouseUp: handleMouseUp,
										children: (
											<Styled.Stack
												ds={ds}
												direction="vertical"
												spacing="content"
												attributes={{
													style: { padding: ds.sizes.content.space },
													children: Array.isArray(children) ? children : [children]
												}}
											/>
										)
									}}
								/>

								{/* Toggle button */}
								<Styled.Box
									ds={ds}
									overrides={{
										base: {
											position: 'fixed',
											top: '50%',
											left: isCollapsed ? '0' : width,
											transform: 'translateY(-50%)',
											cursor: 'pointer',
											padding: ds.sizes.information.space,
											backgroundColor: ds.colors.bg.light,
											borderRadius: `0 ${ds.sizes.content.rounding} ${ds.sizes.content.rounding} 0`,
											borderTop: `1px solid ${ds.colors.border.light}`,
											borderRight: `1px solid ${ds.colors.border.light}`,
											borderBottom: `1px solid ${ds.colors.border.light}`,
											boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
											transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
											zIndex: 1000
										},
										dark: {
											backgroundColor: ds.colors.bg.dark,
											borderColor: ds.colors.border.dark
										},
										hover: {
											backgroundColor: ds.colors.neutral.light
										},
										darkHover: {
											backgroundColor: ds.colors.neutral.dark
										}
									}}
									attributes={{
										onClick: () => onCollapsedChange?.(!isCollapsed),
										children: (
											<Styled.Icon
												ds={ds}
												icon={isCollapsed ? 'chevronRight' : 'chevronLeft'}
												attributes={{
													style: {
														width: '16px',
														height: '16px'
													}
												}}
											/>
										)
									}}
								/>

								{/* Main content */}
								<Styled.Box
									ds={ds}
									attributes={{
										style: { flex: 1 },
										children: content
									}}
								/>
							</>
						)
					}}
				/>
			)
		}
	})(ds)
}
