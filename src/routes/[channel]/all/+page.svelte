<script lang="ts">
	export let data;

	const { boards, channel } = data;
</script>

<div class="flex gap-2 border-b-white border-b-4">
	{#each boards as board}
		<a href={`/${channel}/${board.code}`}>{board.name}</a>
	{/each}
</div>

<div class="flex flex-col gap-2 p-2" />
