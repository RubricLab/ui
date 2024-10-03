import { promises as fs, existsSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'
import { Command } from 'commander'
import prompts from 'prompts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const init = new Command()
	.name('init')
	.description('Initialize required configuration files')
	.action(async () => {
		const responses = await prompts([
			{
				type: 'toggle',
				name: 'typescript',
				message: 'Are you using TypeScript?',
				initial: true,
				active: 'yes',
				inactive: 'no'
			},
			{
				type: 'text',
				name: 'tw_config_path',
				message: 'Enter the path where your tailwind config file is located',
				initial: prev => (prev === true ? './tailwind.config.ts' : './tailwind.config.js')
			},
			{
				type: 'toggle',
				name: 'overwrite_tw_config',
				message: 'Do you want to overwrite your existing tailwind config?',
				initial: false,
				active: 'yes',
				inactive: 'no'
			},
			{
				type: 'text',
				name: 'styles_path',
				message: 'Enter the path where your styles file is located',
				initial: './app/globals.css'
			}
		])

		await executeConfig(responses)
	})

async function executeConfig(responses) {
	const fileEnc = 'utf-8'
	const overwriteTWConfig = responses.overwrite_tw_config
	const extension = responses.typescript ? 'ts' : 'js'
	const configDir = resolve(__dirname, '../config')
	const presetSourcePath = resolve(configDir, `rubric.preset.${extension}`)
	const tailwindConfigSourcePath = resolve(configDir, `tailwind.config.${extension}`)
	const stylesSourcePath = resolve(configDir, 'globals.css')

	const tailwindConfigDestinationPath = resolve(process.cwd(), responses.tw_config_path)
	const presetDestinationPath = resolve(
		dirname(tailwindConfigDestinationPath),
		`rubric.preset.${extension}`
	)
	const stylesDestinationPath = resolve(process.cwd(), responses.styles_path)

	if (existsSync(presetSourcePath)) {
		const presetConfig = await fs.readFile(presetSourcePath, fileEnc)
		await fs.writeFile(presetDestinationPath, presetConfig, fileEnc)
		console.log(
			`Preset file written to ${chalk.green(relative(process.cwd(), presetDestinationPath))}`
		)
	} else {
		console.error(chalk.red('Preset file not found'))
	}

	if (existsSync(stylesSourcePath)) {
		try {
			const [styleInsertion, userStyles] = await Promise.all([
				fs.readFile(stylesSourcePath, fileEnc),
				fs.readFile(stylesDestinationPath, fileEnc)
			])
			const insertionPoint = '@tailwind utilities;'
			const index = userStyles.indexOf(insertionPoint) + insertionPoint.length
			const updatedStyles = `${userStyles.slice(0, index)}\n\n${styleInsertion}${userStyles.slice(index)}`
			await fs.writeFile(stylesDestinationPath, updatedStyles, fileEnc)
			console.log(
				`Styles file written to ${chalk.green(relative(process.cwd(), stylesDestinationPath))}`
			)
		} catch (error) {
			console.error(
				chalk.red(
					'Failed to write to styles file. Ensure the path is correct and the file is writable.'
				)
			)
		}
	}

	if (!overwriteTWConfig) {
		const presetPrompt = `${chalk.green('+')} ${chalk.dim('presets: [')}${chalk.blue(`require("./rubric.preset.${extension}")`)}${chalk.dim('],')}`
		const contentPrompt = `${chalk.green('+')} ${chalk.dim('content: [')}${chalk.blue(`"./node_modules/rubricui/dist/**/*.{js,jsx,ts,tsx}"`)}${chalk.dim('],')}`
		console.log(
			`\nManual changes required to ${chalk.bold(`tailwind.config.${extension}`)}:\n${presetPrompt}\n${contentPrompt}`
		)
	} else if (existsSync(tailwindConfigSourcePath)) {
		const tailwindConfig = await fs.readFile(tailwindConfigSourcePath, fileEnc)
		await fs.writeFile(tailwindConfigDestinationPath, tailwindConfig, fileEnc)
		console.log(
			`Tailwind config file written to ${chalk.green(relative(process.cwd(), tailwindConfigDestinationPath))}`
		)
	} else {
		console.error(chalk.red('Tailwind config file not found'))
	}
}
