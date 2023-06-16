<script lang="ts">
	let name: string;
	let iconUrl: string;
	let code: string;

	function addChannel() {
		const payload = {
			name,
			icon: iconUrl,
			code
		};
		fetch('/api/channels', { method: 'POST', body: JSON.stringify(payload) });
	}
</script>

<form class="flex flex-col gap-2" on:submit={addChannel}>
	<input class="input text-white" type="text" placeholder="Channel Name" bind:value={name} />
	<input class="input text-white" type="text" placeholder="Channel Icon URL" bind:value={iconUrl} />
	<input class="input text-white" type="text" placeholder="Channel Code" bind:value={code} />
	<button class="btn variant-filled" type="submit">Create Channel</button>
</form>
