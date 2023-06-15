<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import BoardForm from '../../components/boards/BoardForm.svelte';

	export let data: LayoutData;

	let dialog: HTMLDialogElement;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="flex gap-2">
			<a href={`/${data.channel}/all`}>All</a>
			{#each data.boards as board}
				<a href={`/${data.channel}/${board.code}`}>{board.name}</a>
			{/each}
			<div on:click={() => dialog.showModal()}>Add</div>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>

<dialog bind:this={dialog} class="card" on:close><BoardForm channelCode={data.channel} /></dialog>
