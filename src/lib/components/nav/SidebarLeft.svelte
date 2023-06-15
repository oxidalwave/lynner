<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import AppRailAvatar from './auth/AppRailAvatar.svelte';
	import ChannelForm from '../channel/ChannelForm.svelte';
	import type { Channel } from '@prisma/client';
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
	let currentTile: number = 0;

	export let channels: Channel[];

	let dialog: HTMLDialogElement;
</script>

<AppRail>
	{#each channels as channel}
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.params.channel === channel.code}
			href={`/channels/${channel.code}/all`}
			title={channel.name}
		>
			<div>
				<img class="p-4" src={channel.icon} alt="logo" />
				<span>{channel.name}</span>
			</div>
		</AppRailAnchor>
	{/each}
	<AppRailAnchor on:click={() => dialog.showModal()}>
		<div class="m-4 p-4 border-2 rounded-full">
			<FaPlus />
		</div>
	</AppRailAnchor>
	<svelte:fragment slot="trail"><AppRailAvatar /></svelte:fragment>
</AppRail>

<dialog bind:this={dialog} class="card" on:close><ChannelForm /></dialog>
