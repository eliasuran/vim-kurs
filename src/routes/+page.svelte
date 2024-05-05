<script lang="ts">
	import { styles } from '$lib/styles.js';
	import Code from '../components/Code.svelte';
	import TransitionWrapper from '../components/TransitionWrapper.svelte';
</script>

<TransitionWrapper>
	<div class="flex flex-col gap-8">
		<h1 class="text-5xl font-semibold">Vim-kurs</h1>
		<h2 class="text-3xl font-semibold">Setup</h2>
		<Code label="Last ned neovim med brew" code="brew install neovim" />
		<div>
			Om du ikke har brew, kan du bruke <a
				class="text-blue-400 underline"
				href="https://github.com/neovim/neovim/blob/master/INSTALL.md#macos--os-x">denne</a
			> lenken og følge instruksene
		</div>
		<p>Neovim er basically bare vim, men skrevet i <span class="text-blue-700">Lua</span></p>
		<p>Nå skal vi klone en basic neovim config</p>
		<Code
			label="Bruk git clone for å laste ned configen"
			code={'git clone https://github.com/eliasuran/kurs.nvim.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim'}
		/>
		<Code label="Nå kan du åpne neovim ved å kjøre nvim" code={'nvim'} />
		<p>Dette vil åpne neovim i mappen du er i</p>
		<div class="self-end pb-12">
			<a href="/oppgave" class={styles.button3}>Oppgave</a>
		</div>
	</div>
</TransitionWrapper>
