import { Command } from "commander";
import prompts from "prompts";
import { existsSync, promises as fs } from "node:fs";
import { resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const init = new Command()
	.name("init")
	.description("initialize your project and install dependencies")
	.action(async () => {
		const responses = await prompts([
			{
				type: "toggle",
				name: "typescript",
				message: "Are you using TypeScript?",
				initial: true,
				active: "yes",
				inactive: "no",
			},
			{
				type: "text",
				name: "tw_config_path",
				message: "Enter the path where your tailwind config file is located",
				initial: (prev) =>
					prev === true ? "./tailwind.config.ts" : "./tailwind.config.js",
			},
			{
				type: "text",
				name: "styles_path",
				message: "Enter the path where your styles file is located",
				initial: "./app/globals.css",
			},
		]);

		await executeConfig(responses);
	});

async function executeConfig(responses) {
	const fileEnc = "utf-8";
	const extension = responses.typescript ? "ts" : "js";
	const configDir = resolve(__dirname, "../config");
	const presetSourcePath = resolve(configDir, `rubric.preset.${extension}`);
	const tailwindConfigSourcePath = resolve(
		configDir,
		`tailwind.config.${extension}`,
	);
	const stylesSourcePath = resolve(configDir, "globals.css");

	const tailwindConfigDestinationPath = resolve(
		process.cwd(),
		responses.tw_config_path,
	);
	const presetDestinationPath = resolve(
		dirname(tailwindConfigDestinationPath),
		`rubric.preset.${extension}`,
	);
	const stylesDestinationPath = resolve(process.cwd(), responses.styles_path);

	//TODO: Create Utils file

	if (existsSync(presetSourcePath)) {
		const presetConfig = await fs.readFile(presetSourcePath, fileEnc);
		await fs.writeFile(presetDestinationPath, presetConfig, fileEnc);
		console.log(
			`Preset file written to ${chalk.green(relative(process.cwd(), presetDestinationPath))}`,
		);
	} else {
		console.error(chalk.red("Preset file not found"));
	}

	if (existsSync(tailwindConfigSourcePath)) {
		const tailwindConfig = await fs.readFile(tailwindConfigSourcePath, fileEnc);
		await fs.writeFile(tailwindConfigDestinationPath, tailwindConfig, fileEnc);
		console.log(
			`Tailwind config file written to ${chalk.green(relative(process.cwd(), tailwindConfigDestinationPath))}`,
		);
	} else {
		console.error(chalk.red("Tailwind config file not found"));
	}

	if (existsSync(stylesSourcePath)) {
		const styles = await fs.readFile(stylesSourcePath, fileEnc);
		await fs.writeFile(stylesDestinationPath, styles, fileEnc);
		console.log(
			`Styles file written to ${chalk.green(relative(process.cwd(), stylesDestinationPath))}`,
		);
	}
}
