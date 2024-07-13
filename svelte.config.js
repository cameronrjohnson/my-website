import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),

		paths: {
			// Set the base path only if it's defined in the environment variables
			base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH || ''
		}
	}
};

export default config;
