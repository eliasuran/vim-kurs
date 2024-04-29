<script lang="ts">
	import Code from '../components/Code.svelte';
</script>

<div class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">Vim-kurs</h1>
	<h2 class="text-3xl font-semibold">Setup</h2>
	<Code label="Last ned neovim med brew" code="brew install neovim" />
	<p>Neovim er basically bare vim, men skrevet i <span class="text-blue-700">Lua</span></p>
	<p>Nå skal vi klone en basic neovim config</p>
	<Code
		label="Bruk git clone for å laste ned configen"
		code={`git clone https://github.com/eliasuran/kurs.nvim.git "\${{XDG_CONFIG_HOME:-$HOME/.config}}/nvim"`}
	/>
	<Code label="Nå kan du åpne neovim ved å kjøre nvim" code={'nvim'} />
	<p>Dette vil åpne neovim i mappen du er i</p>
</div>
