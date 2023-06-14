<script lang="ts">
	export let data;

	const board = data.board;
</script>

<div class="flex flex-col gap-2 p-2">
	{#each board as post}
		<div class="card p-2">{post.title}</div>
	{/each}
</div>
