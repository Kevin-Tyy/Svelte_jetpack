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
	let activeTab = 'Current Polls';
	const tabChange = (e) => {
		activeTab = e.detail;
	};
</script>

<div class="app">
	<Header />
	<main>
		<Tabs {activeTab} {tabs} on:tabChange={tabChange} />
		<slot />
	</main>
	<Footer />
</div>

<style>
</style>
