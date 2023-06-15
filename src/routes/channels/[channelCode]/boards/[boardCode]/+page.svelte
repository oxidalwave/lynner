<script lang="ts">
	export let data;

	let posts = [...Array(28).keys()];
</script>

<div class="flex flex-col gap-2 p-2">
	<div class="card p-2">
		<div>{data.board.name}</div>
		<img src={data.board.icon} alt="board logo" />
	</div>
	{#each posts as post}
		<div class="card p-2">
			<div>Title</div>
			<div>TEXT GOES HERE</div>
			<div>TEXT GOES HERE</div>
			<div>TEXT GOES HERE</div>
			<div>TEXT GOES HERE</div>
		</div>
	{/each}
</div>
