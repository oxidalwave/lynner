<script lang="ts">
	import PostForm from '$lib/components/post/PostForm.svelte';

	export let data;

	let dialog: HTMLDialogElement;

	$: posts = data.posts;
</script>

<div class="flex flex-col gap-2 p-2">
	<button class="btn variant-filled" on:click={() => dialog.showModal()}>Create Post</button>
	{#each posts as post}
		<div class="card p-2">
			<div class="h2">{post.title}</div>
			<div>{post.text}</div>
		</div>
	{/each}
</div>

<dialog bind:this={dialog} class="card" on:close>
	<PostForm channelCode={data.channelCode} boardCode={data.boardCode} postProcess={() => dialog.close()} />
</dialog>
