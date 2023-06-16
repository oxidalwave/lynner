<script lang="ts">
	export let channelCode: string;

	let name: string;
	let icon: string;
	let code: string;

	function addChannel() {
		const payload = {
			name,
			icon,
			code
		};
		fetch(`/api/channels/${channelCode}/boards`, { method: 'POST', body: JSON.stringify(payload) });
	}
</script>

<form class="flex flex-col gap-2" on:submit={addChannel}>
	<input class="input text-white" type="text" placeholder="Board Name" bind:value={name} />
	<input class="input text-white" type="text" placeholder="Board Icon URL" bind:value={icon} />
	<input class="input text-white" type="text" placeholder="Board Code" bind:value={code} />
	<button class="btn variant-filled" type="submit">Create Board</button>
</form>
