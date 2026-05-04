import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { marked } from 'marked';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';

/** Compile `.md` imports to a default-exported HTML string at build time (skip `?raw`). */
function markdownHtml(): Plugin {
	return {
		name: 'markdown-html',
		enforce: 'pre',
		transform(code, id) {
			if (id.includes('?raw')) return;
			const path = id.split('?')[0];
			if (!path.endsWith('.md')) return;

			const html = marked.parse(code);
			return `export default ${JSON.stringify(html)};`;
		}
	};
}

export default defineConfig({
	plugins: [tailwindcss(), markdownHtml(), sveltekit()]
});
