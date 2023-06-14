<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import AppRailAvatar from './auth/AppRailAvatar.svelte';

	let currentTile: number = 0;

	export let channels: { name: string; server: string }[];
</script>

<AppRail>
	{#each channels as channel, i}
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.params.channel === channel.name && $page.params.server === channel.server}
			href={`/${channel.server}/${channel.name}/all`}
			title={channel.name}
		>
			<span>{channel.server}</span>
			<span>{channel.name}</span>
		</AppRailAnchor>
	{/each}
	<svelte:fragment slot="trail"><AppRailAvatar /></svelte:fragment>
</AppRail>
