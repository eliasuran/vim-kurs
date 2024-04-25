<script>
	import '../app.css';

	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';

	// Register each imported language module
	hljs.registerLanguage('xml', xml); // for HTML
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
	class="absolute inset-0 min-h-screen overflow-x-hidden px-96 py-20 bg-bg text-text selection:bg-[red]"
>
	<slot />
</div>
