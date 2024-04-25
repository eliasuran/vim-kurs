<script lang="ts">
	import Code from '../components/Code.svelte';
</script>

<div class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">Vim-kurs</h1>
	<h2 class="text-3xl font-semibold">Oppgave</h2>
	<p>Lag en ny javascript fil og kall den script.js</p>
	<Code
		label="Kopier denne koden inn i filen"
		code={`// LOG "hello world" uten å lage nye variabler
//
let hello = ""
// 
// 
// 
// 
// SETT HELLO TIL "hello"
//
//
//
//
//
/* .                                                */ let world; 
/* SETT WORLD TIL "world"                                        */ world = ""
//
//
//
//
//
//
//
console.log(hello, world)`}
	/>
	<Code label="Kjør programmet" language="shell" code={`node script.js`} />
</div>
