<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#each data.posts as post}
	<div>{post.title}</div>
{/each}
