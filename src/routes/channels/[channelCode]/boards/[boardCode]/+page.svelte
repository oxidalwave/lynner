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
			<div class="h2">Title</div>
			<div>Chargers fired Anthony Lynn this morning, per source. Two seasons ago, Lynn led the Chargers to a 12-4 record, then this year they finished 7-9, winning their last four games, giving him a 33-31 record in LA. Chargers now become the sixth NFL team to have a head coach opening.</div>
		</div>
	{/each}
</div>
