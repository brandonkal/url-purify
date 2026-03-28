import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [dts({ include: ['lib'], insertTypesEntry: true })],
	build: {
		copyPublicDir: false,
		lib: {
			entry: 'lib/main.ts',
			fileName: (format) => `main.${format}.js`,
			formats: ['es'],
		},
		target: 'esnext',
		sourcemap: true,
		minify: false,
	},
});
