import { type DragEvent, useState } from 'react'
import { z } from 'zod'
import { styled } from '../../style'
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

				const handleFile = (file: z.infer<T>['file']) => {
					if (maxSize && file.size > maxSize) return

					setState({
						file,
						type: file.type,
						size: file.size,
						name: file.name
					} as z.infer<T>)
				}

				return (
					<styled.label ds={ds}>
						{label}
						<styled.upload
							ds={ds}
							style={{
								...(isDragging && {
									borderColor: ds.colors.active.light,
									backgroundColor: ds.colors.focus.light,
									color: 'white'
								})
							}}
							onDragOver={e => {
								e.preventDefault()
								setIsDragging(true)
							}}
							onDragLeave={() => setIsDragging(false)}
							onDrop={(e: DragEvent<HTMLDivElement>) => {
								e.preventDefault()
								setIsDragging(false)
								const file = e.dataTransfer.files[0]
								if (file) handleFile(file)
							}}
						>
							<input
								type="file"
								accept={stateSchema._def.options.map(opt => opt.shape.type._def.value).join(',')}
								onChange={e => {
									const file = e.target.files?.[0]
									if (file) handleFile(file)
								}}
								style={{ display: 'none' }}
							/>
							<styled.text ds={ds} variant="secondary">
								{'Drag file here or click to upload'}
							</styled.text>
						</styled.upload>
					</styled.label>
				)
			},
			_state: stateSchema
		})(ds)(stateSchema)
}
