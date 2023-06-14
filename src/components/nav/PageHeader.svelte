<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';

	import { writable, type Writable } from 'svelte/store';
	const tabSet: Writable<number> = writable(0);

	export let boards: { name: string; icon: string; label: string }[];
</script>

<TabGroup>
	<Tab bind:group={$tabSet} name="all" value={0}>
		<svelte:fragment slot="lead" />
		All</Tab
	>
	{#each boards as board, i}
		<Tab bind:group={$tabSet} name={board.name} value={i + 1}>
			<svelte:fragment slot="lead">{board.icon}</svelte:fragment>
			{board.label}</Tab
		>
	{/each}
</TabGroup>
