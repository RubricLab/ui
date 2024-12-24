import { type DragEvent, useState } from 'react'
import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem, ZodFile } from '../../types'
import { createStatefulComponent } from '../../utils'

export function createFileUpload(ds: DesignSystem) {
	return <T extends z.ZodDiscriminatedUnion<'type', ZodFile>>(stateSchema: T) =>
		createStatefulComponent({
			createSchema: () =>
				z.object({
					label: z.string(),
					maxSize: z.number().optional()
				}),
			render: ({ props: { label, maxSize }, setState }) => {
				const [isDragging, setIsDragging] = useState(false)
				const id = `fileupload-${label.toLowerCase().replace(/\s+/g, '-')}`

				const handleFile = (file: z.infer<T>['file']) => {
					if (maxSize && file.size > maxSize) return

					setState({
						file,
						type: file.type,
						size: file.size,
						name: file.name
					} as z.infer<T>)
				}

				const key = `${label.toLowerCase().replace(/\s+/g, '-')}-fileupload`
				return (
					<Styled.Flex
						ds={ds}
						direction="column"
						gap="content"
						attributes={{
							children: [
								<Styled.Label
									key={`${key}-label`}
									ds={ds}
									attributes={{
										children: [
											label,
											<Styled.Box
												key={`${key}-box`}
												ds={ds}
												attributes={{
													onDragOver: (e: DragEvent<HTMLDivElement>) => {
														e.preventDefault()
														setIsDragging(true)
													},
													onDragLeave: () => setIsDragging(false),
													onDrop: (e: DragEvent<HTMLDivElement>) => {
														e.preventDefault()
														setIsDragging(false)
														const file = e.dataTransfer.files[0]
														if (file) handleFile(file)
													},
													children: [
														<Styled.Input
															key="input"
															ds={ds}
															type="file"
															attributes={{
																id,
																accept: stateSchema._def.options.map(opt => opt.shape.type._def.value).join(','),
																onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
																	const file = e.target.files?.[0]
																	if (file) handleFile(file)
																},
																style: { display: 'none' }
															}}
														/>,
														<Styled.Text
															key="text"
															ds={ds}
															attributes={{
																style: {
																	textAlign: 'center',
																	padding: ds.sizes.content.space,
																	...(isDragging && {
																		color: ds.colors.active.light
																	})
																},
																children: 'Drag file here or click to upload'
															}}
														/>
													]
												}}
												overrides={{
													base: {
														cursor: 'pointer',
														border: `2px dashed ${ds.colors.border.light}`,
														borderRadius: ds.sizes.content.rounding,
														backgroundColor: ds.colors.bg.light,
														transition: 'all 0.2s ease-in-out',
														...(isDragging && {
															borderColor: ds.colors.active.light,
															backgroundColor: ds.colors.focus.light
														})
													},
													dark: {
														border: `2px dashed ${ds.colors.border.dark}`,
														backgroundColor: ds.colors.bg.dark,
														...(isDragging && {
															borderColor: ds.colors.active.dark,
															backgroundColor: ds.colors.focus.dark
														})
													}
												}}
											/>
										]
									}}
								/>
							]
						}}
					/>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
