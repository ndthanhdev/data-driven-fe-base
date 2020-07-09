import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import sucrase from '@rollup/plugin-sucrase'
import nodeGlobals from 'rollup-plugin-node-globals'
import replace from '@rollup/plugin-replace'

export default {
	input: './pkgs/app/src/index.tsx',
	output: {
		file: `./pkgs/app/dist/index.js`,
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		resolve({
			mainFields: ['module', 'browser', 'main'],
			extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'],
		}),
		commonjs(),
		sucrase({
			exclude: ['node_modules/**'],
			transforms: ['typescript', 'jsx'],
		}),
		nodeGlobals(),
		replace({
			__CLIENT_ID__: () => process.env.CLIENT_ID ?? '1d4487ba605cb0e29ccb',
		}),
		htmlTemplate({
			template: './etc/templates/dev.html',
			target: './pkgs/app/dist/index.html',
		}),
	],
}
