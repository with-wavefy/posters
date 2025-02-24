import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		files: {
			routes: 'src/app/routes',
			appTemplate: 'src/app/app.html'
		},
		alias: {
			'@shared': 'src/shared/*',
			'@widgets': 'src/widgets/*',
			'@pages': 'src/pages/*',
			'@entities': 'src/entities/*',
			'@features': 'src/features/*'
		}
	}
};

export default config;
