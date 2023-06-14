<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';

	let currentTile: number = 0;

	export let channels: { name: string; server: string; icon: string; label: string }[];
</script>

<AppRail>
	{#each channels as channel, i}
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.params.channel === channel.name && $page.params.server === channel.server}
			href={`/${channel.server}/${channel.name}/all`}
			title={channel.name}
		>
			<svelte:fragment slot="lead">{channel.icon}</svelte:fragment>
			<span>{channel.label}</span>
		</AppRailAnchor>
	{/each}
</AppRail>
