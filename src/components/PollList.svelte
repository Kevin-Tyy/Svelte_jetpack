<script>
	// @ts-nocheck

	import { onDestroy, onMount } from 'svelte';
	import pollStore from '../stores/pollStore';
	import PollDetails from './PollDetails.svelte';
	
	// export let polls = [];
	// const unsubcribe = pollStore.subscribe((data) => {
	// 	polls = data;
	// });
	// onMount(() => {

	// });
	// onDestroy(() => {
	// 	unsubcribe()
	// });

	
</script>

<section>
	<div class="poll_list">
		{#each $pollStore as poll (poll.id)}
			<div>
				<PollDetails {poll}  />
			</div>
		{/each}
	</div>
</section>

<style>
	.poll_list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;
	}
</style>
