<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import BoardForm from '$lib/components/boards/BoardForm.svelte';

	export let data: LayoutData;

	let dialog: HTMLDialogElement;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="flex gap-2 overflow-x-scroll">
			<a class="whitespace-nowrap" href={`/channels/${data.channel.code}/all`}>All</a>
			{#each data.boards as board}
				<a class="whitespace-nowrap" href={`/channels/${data.channel.code}/boards/${board.code}`}>{board.name}</a>
			{/each}
			<div class="whitespace-nowrap" on:click={() => dialog.showModal()}>Add</div>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>

<dialog bind:this={dialog} class="card" on:close><BoardForm channelCode={data.channel.code} /></dialog>
