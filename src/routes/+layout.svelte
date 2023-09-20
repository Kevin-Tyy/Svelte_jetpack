<script>
	// @ts-nocheck
	import "./globals.css"
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Tabs from '../shared/Tabs.svelte';
	const tabs = [
		{ title: 'Current Polls', link: '/' },
		{ title: 'Add a new Poll', link: '/create' }
	];
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
