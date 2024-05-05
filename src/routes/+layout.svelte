<script lang="ts">
	import '../app.css';
	import hljs from 'highlight.js/lib/core';

	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);

	import 'highlight.js/styles/github-dark.css';

	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
	console.log('alt er server side jeg lover ikke prøv engang :=');
</script>

<div
	class="absolute inset-0 min-h-screen overflow-x-hidden py-20 bg-bg text-text selection:bg-[red] flex justify-center"
>
	<slot />
</div>
