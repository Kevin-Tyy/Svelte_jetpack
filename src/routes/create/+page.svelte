<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	let polls = [
		{
			id : 2342,
			question: 'Python or JavaScript',
			answerA: 'Python',
			answerB: 'JavaScript',
			votesA: 9,
			votesB: 15
		}
	];

	import CreateForm from '../../components/CreateForm.svelte';
	const handleAddPoll = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls]
		console.log(polls)
		goto('/');
	};
</script>

<svelte:head>
	<title>Create a new poll</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
	<CreateForm on:add_poll={handleAddPoll} />
</section>

<style></style>
