<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="absolute" transition:fade={{ delay: 100, duration: 150 }}>
	<slot />
</div>
