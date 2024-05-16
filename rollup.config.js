import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import {defineConfig} from 'rollup'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from 'tailwindcss'

export default defineConfig({
	input: 'src/index.ts',
	output: [
		{file: 'build/index.js', format: 'cjs', sourcemap: true},
		{file: 'build/index.esm.js', format: 'esm', sourcemap: true}
	],
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		postcss({
			extract: true,
			minimize: true,
			sourceMap: true,
			plugins: [tailwindcss(), autoprefixer()]
		})
	],
	external: ['react', 'react-dom']
})
