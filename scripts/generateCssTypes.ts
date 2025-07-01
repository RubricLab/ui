import { readFileSync } from 'node:fs'
import { createTemplate, generate } from '@rubriclab/codegen'
import { z } from 'zod'

const build = () => {
	generate({
		acceptedFileTypes: ['.css'],
		buildFile: ({ path }) => `${path}.d.ts`,
		getContext: async files => {
			return files.map(file => {
				const css = readFileSync(`${file.path}.css`, 'utf-8')

				const classNames = css
					.match(/\.[\w-]+\s/g)
					?.map(className => className.slice(1, -1).trim()) as string[]

				const uniqueClassNames = [...new Set(classNames)]

				return {
					classNames: uniqueClassNames,
					fileName: file.name
				}
			})
		},
		recursive: true,
		template: createTemplate(
			z.array(
				z.object({
					classNames: z.array(z.string()),
					fileName: z.string()
				})
			),
			(context, options) => {
				return `${context
					.filter(item => options?.path.includes(item.fileName))
					.map(
						item => `declare module "*/${item.fileName.split('/')[1]}.css" {
              const styles: {
                ${item.classNames.map(className => `"${className}": string`).join('\n')}
              }
              export default styles
            }
          `
					)}`.replaceAll('  ', '')
			}
		),
		watch: true,
		watchDir: 'src/components'
	})
}

if (import.meta.path === Bun.main) build()
