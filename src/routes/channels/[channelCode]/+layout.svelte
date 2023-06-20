<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import BoardForm from '$lib/components/boards/BoardForm.svelte';

	export let data: LayoutData;

	let dialog: HTMLDialogElement;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<TabGroup>
			<TabAnchor href={`/channels/${data.channel.code}/all`}>All</TabAnchor>
			{#each data.boards as board}
				<TabAnchor href={`/channels/${data.channel.code}/boards/${board.code}`}
					>{board.name}</TabAnchor
				>
			{/each}
			<TabAnchor on:click={() => dialog.showModal()}>Add</TabAnchor>
		</TabGroup>
	</svelte:fragment>
	<slot />
</AppShell>

<dialog bind:this={dialog} class="card" on:close>
	<BoardForm channelCode={data.channel.code} />
</dialog>
