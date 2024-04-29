<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';

	export let label: string;
	export let language = 'shell';
	export let code: string;
</script>

<div class="flex flex-col gap-2 select-none">
	<h3>{label}</h3>
	<CodeBlock background="bg-[#232323]" {language} {code} />
</div>
