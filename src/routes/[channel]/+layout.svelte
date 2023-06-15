<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="flex gap-2">
			{#each data.boards as board}
				<a href={`/${data.channel}/${board.code}`}>{board.name}</a>
			{/each}
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
