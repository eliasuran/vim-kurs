<script lang="ts">
	import { styles } from '$lib/styles.js';
	import Code from '../../components/Code.svelte';
	import TransitionWrapper from '../../components/TransitionWrapper.svelte';
</script>

<TransitionWrapper>
	<div class="flex flex-col gap-8">
		<h1 class="text-5xl font-semibold">Praktisk oppgave: VimBeGood</h1>
		<p>Som en praktisk øvelse kan vi bruke VimBeGood</p>
		<p>Åpne opp vim, og så skriv ":". Dette vil starte en command på bunnen av skjermen</p>
		<Code label="Etter :, skriv VimBeGood og trykk Enter" code=":VimBeGood" />
		<p>Beveg deg nedover til [] hjkl, og trykk dd (dobbel d)</p>
		<p>
			I oppgaven skal du bevege deg til "x" med vim motions, og trykke x på tastaturet når du er
			over den
		</p>
		<a href="https://i.ibb.co/g4VBmk4/motions.png" class="text-blue-400">Cheat-sheet</a>
		<p>Når du føler du klarer dette ganske godt, kan du gå videre til en ekstra oppgave</p>
		<div class="flex w-full justify-between pb-12">
			<a href="/" class={styles.button3}>Tilbake</a>
			<a href="/oppgave2" class={styles.button3}>Neste</a>
		</div>
	</div>
</TransitionWrapper>
