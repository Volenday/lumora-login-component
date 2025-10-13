import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
	return {
		plugins: [
			react(),
			tsconfigPaths(),
			dts({
				insertTypesEntry: true,
				include: ['src/**/*'],
				exclude: ['src/**/*.test.*', 'src/**/*.spec.*']
			})
		],
		build: {
			lib: {
				entry: 'src/index.ts',
				name: 'LumoraLogin',
				formats: ['es', 'cjs'],
				fileName: format => `index.${format}.js`
			},
			rollupOptions: {
				external: [
					'react',
					'react-dom',
					'@emotion/react',
					'@emotion/styled',
					'@mui/material',
					'@mui/icons-material',
					'react-hook-form',
					'@hookform/resolvers',
					'yup',
					'@react-oauth/google',
					'@volenday/lumora-otp-component'
				],
				output: {
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM'
					}
				}
			}
		},
		// Add development server configuration
		server: {
			port: 3001,
			open: true
		}
	};
});
