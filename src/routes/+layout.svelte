<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../components/nav/Header.svelte';
	import SidebarLeft from '../components/nav/SidebarLeft.svelte';
	import SidebarRight from '../components/nav/SidebarRight.svelte';
	import PageFooter from '../components/nav/PageFooter.svelte';
	import Footer from '../components/nav/Footer.svelte';
	import PageHeader from '../components/nav/PageHeader.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;

	let { channels } = data;
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<PageHeader />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><SidebarLeft {channels} /></svelte:fragment>
	<svelte:fragment slot="sidebarRight"><SidebarRight /></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><PageFooter /></svelte:fragment>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
	<!-- (footer) -->
</AppShell>
