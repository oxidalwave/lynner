<script lang="ts">
	export let data;
</script>

<div class="flex flex-col gap-2 p-2">
	<div class="card p-2">{data.channel.code} - {data.board.code}</div>
	<div class="card p-2">{JSON.stringify(data.board)}</div>
</div>
