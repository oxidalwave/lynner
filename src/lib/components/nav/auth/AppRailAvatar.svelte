<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

{#if $page.data.session}
	{#if $page.data.session.user?.image}
		<Avatar
			class="rounded-b-none"
			width=""
			src={$page.data.session.user.image}
			on:click={() => signOut()}
		/>
	{:else}
		<Avatar width="" on:click={() => signOut()}>{$page.data.session.user?.name}</Avatar>
	{/if}
{:else}
	<Avatar
		class="rounded-b-none"
		width=""
		src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
		on:click={() => signIn('github')}
	/>
{/if}
