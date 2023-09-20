<script>
	// @ts-nocheck
	import "./globals.css"
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Tabs from '../shared/Tabs.svelte';
	import { tweened } from "svelte/motion";
	const tabs = [
		{ title: 'Current Polls', link: '/' },
		{ title: 'Add a new Poll', link: '/create' }
	];
	const value = tweened(0);

</script>
<div class="app">
	<Header />
	<main>
		<Tabs  {tabs} />
		<slot />
	</main>
	<Footer />
</div>

<style>
</style>
