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

<form on:submit={addChannel}>
	<input class="input" type="text" placeholder="name" bind:value={name} />
	<input class="input" type="text" placeholder="iconUrl" bind:value={icon} />
	<input class="input" type="text" placeholder="code" bind:value={code} />
	<button class="btn variant-filled" type="submit">Create Board</button>
</form>
