<script lang="ts">
	import { styles } from '$lib/styles.js';
	import Code from '../../components/Code.svelte';
	import TransitionWrapper from '../../components/TransitionWrapper.svelte';
</script>

<TransitionWrapper>
	<div class="flex flex-col gap-8">
		<h1 class="text-5xl font-semibold">Praktisk oppgave: Redigere fil</h1>
		<p>I denne oppgaven skal du redigere en fil</p>
		<Code
			label="Når du er inni vim kan du skrive ':' og så en kommando for å kjøre kommandoen, her er noen av de mest brukte"
			code={`:w // lagre fil
:wq // lagre og lukk fil
:q // lukk fil
:q! // lukk fil og discard endringer`}
		/>
		<Code
			label="Du kan åpne en ny fil med vim ved å kjøre nvim + navnet på filen (om filen ikke eksisterer vil den lage en ny med det navnet)"
			code="nvim script.js"
		/>
		<Code
			label="Lim denne koden inn i filen med Cmd+v"
			code={`// LOG hello world uten å lage nye variabler
// eller endre på console.log() funksjonen
//
//
// SETT hello til 'hello'
let hello = '';
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
/* SETT WORLD TIL 'world'                                        */ world = '';
//
//
//
//
//
//
//
console.log(hello, world);
`}
			language="js"
		/>
		<Code label="Du kan kjøre koden inni vim ved å kjøre" code=":!node script.js" />
		<p>Om den printer "hello world" er det riktig</p>
		<div class="flex w-full justify-between pb-12">
			<a href="/oppgave" class={styles.button3}>Tilbake</a>
		</div>
	</div>
</TransitionWrapper>
