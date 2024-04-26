<script lang="ts">
	import Code from '../components/Code.svelte';
</script>

<div class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">Vim-kurs</h1>
	<h2 class="text-3xl font-semibold">Oppgave</h2>
	<p>Lag en ny javascript fil og kall den script.js</p>
	<Code
		label="Kopier og lim denne koden inn i filen"
		code={`// LOG hello world uten å lage nye variabler
// eller endre på console.log() funksjonen
// 
//
// SETT hello til 'hello'
let hello = ''
// 
// 
// 
// 
// 
//
//
//
//
/* .                                                */ let world; 
/* SETT WORLD TIL 'world'                                        */ world = ''
//
//
//
//
//
//
//
console.log(hello, world)`}
	/>
	<form method="POST" class="flex flex-col gap-2 items-start">
		<p>Paste den redigerte koden inn her</p>
		<input type="text" name="code" class="text-bg" />
		<button type="submit">Submit</button>
	</form>
</div>
