<script lang="ts">
	export let data;

	const { boards, board } = data;
</script>

<div class="flex gap-2 border-b-white border-b-4">
	{#each boards as board}
		<a href={`/nfl/${board.code}`}>{board.name}</a>
	{/each}
</div>
<div class="flex flex-col gap-2 p-2">
	<div class="card p-2">{board.name}</div>
</div>
