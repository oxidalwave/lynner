<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import AppRailAvatar from './auth/AppRailAvatar.svelte';
	import ChannelForm from '../channel/ChannelForm.svelte';

	let currentTile: number = 0;

	export let channels: { name: string; code: string }[];

	let dialog: HTMLDialogElement;
</script>

<AppRail>
	<AppRailAnchor on:click={() => dialog.showModal()}>
		<span>Add</span>
	</AppRailAnchor>
	{#each channels as channel}
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.params.channel === channel.code}
			href={`/${channel.code}/all`}
			title={channel.name}
		>
			<span>{channel.name}</span>
		</AppRailAnchor>
	{/each}
	<svelte:fragment slot="trail"><AppRailAvatar /></svelte:fragment>
</AppRail>

<dialog bind:this={dialog} class="card" on:close><ChannelForm /></dialog>
