#!/usr/bin/env node

import { Command } from 'commander'
import { init } from './commands/init.js'

async function main() {
	const program = new Command()
		.name('rubricui')
		.description('Fully customizable ui components for any aesthetic ✨')
	program.addCommand(init)

	program.parse()
}

main()
