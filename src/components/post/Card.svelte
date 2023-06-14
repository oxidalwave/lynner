<script lang="ts">
	export let post: { title: string; image?: string; rank: number; reaction: number };

	let actualRank = post.rank + post.reaction;

	function upvote() {
		post.reaction = 1;
	}

	function downvote() {
		post.reaction = -1;
	}

	function clearVote() {
		post.reaction = 0;
	}
</script>

<div class="card bg-initial card-hover overflow-hidden">
	<header><img class="w-full" src={post.image} alt="post image" /></header>
	<span class="p-4 flex justify-between"
		><div>{post.title}</div>
		<div class="bg-primary-700 rounded-md px-2" on:click={clearVote}>
			<span class="bg-primary-300" on:click={upvote}>UP</span>
			<span>{actualRank}</span>
			<span class="bg-primary-300" on:click={downvote}>DOWN</span>
		</div></span
	>
</div>
