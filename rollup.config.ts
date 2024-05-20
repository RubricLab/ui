import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import {defineConfig} from 'rollup'
import postcss from 'rollup-plugin-postcss'
import {typescriptPaths} from 'rollup-plugin-typescript-paths'
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config'

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
		typescriptPaths(),
		postcss({
			extract: true,
			minimize: true,
			sourceMap: true,
			plugins: [tailwindcss(tailwindConfig), autoprefixer()]
		})
	],
	external: ['react', 'react-dom']
})
