<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="flex gap-2">
			<a href={`/${data.channel}/all`}>All</a>
			{#each data.boards as board}
				<a href={`/${data.channel}/${board.code}`}>{board.name}</a>
			{/each}
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
