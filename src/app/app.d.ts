// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	module 'virtual:icons/*' {
		import type { Component } from 'svelte';
		import type { SvelteHTMLElements } from 'svelte/elements';

		const component: Component<SvelteHTMLElements['svg']>;

		export default component;
	}
	module '~icons/*' {
		import type { Component } from 'svelte';
		import type { SvelteHTMLElements } from 'svelte/elements';

		const component: Component<SvelteHTMLElements['svg']>;

		export default component;
	}
}

export {};
