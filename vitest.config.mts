import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		environment: 'node',
		include: ['src/**/*.spec.ts'],
		coverage: {
			include: ['src/**/*.ts'],
			exclude: ['**/*.spec.*', '**/node_modules/**', '**/index.ts'],
		},
	},
})
