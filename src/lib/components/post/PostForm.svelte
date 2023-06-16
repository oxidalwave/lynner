<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	export let channelCode: string;
	export let boardCode: string;

	export let postProcess: () => void = () => {};

	let title: string;
	let text: string;

	function addPost() {
		const payload = {
			title,
			text
		};

		fetch(`/api/channels/${channelCode}/boards/${boardCode}/posts`, {
			method: 'POST',
			body: JSON.stringify(payload)
		})
			.then(() => invalidateAll())
			.then(postProcess);
	}
</script>

<form class="flex flex-col gap-2" on:submit={addPost}>
	<input class="input text-white" type="text" placeholder="Post Title" bind:value={title} />
	<textarea class="textarea" rows="6" placeholder="Post Text" bind:value={text} />
	<button class="btn variant-filled" type="submit">Create Post</button>
</form>
