<script>
	//@ts-nocheck
	import Button from '../shared/Button.svelte';
	import Card from '../shared/Card.svelte';
	import pollStore from '../stores/pollStore';
	import { tweened } from 'svelte/motion';
	/** @type {{id : string, question: string, answerA?: string, answerB?: string, votesA : string, votesB : string}} */
	export let poll;
	$: totalVotes = poll.votesA + poll.votesB;
	$: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
	$: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

	//@ts-ignore
	const handleVote = (option, id) => {
		pollStore.update((currentPolls) => {
			let pollCopy = [...currentPolls];
			let upVotedPoll = pollCopy.find((poll) => poll.id == id);
			if (option === 'a') {
				upVotedPoll.votesA++;
			}
			if (option === 'b') {
				upVotedPoll.votesB++;
			}
			return pollCopy;
		});
	};
	//<button on:click={() => value.set(1)}>{$value}</button>

	const tweenedA = tweened(0);
	const tweenedB = tweened(0);

	$: tweenedA.set(percentA);
	$: tweenedB.set(percentB);

	const handleDelete = (id) => {
		pollStore.update((currentPolls) => {
			return currentPolls.filter((poll) => poll.id !== id);
		});
	};
</script>

<Card>
	<div class="poll">
		<h3>{poll.question}</h3>
		<p>Total votes: {totalVotes || 0}</p>
		<button class="answer" on:click={() => handleVote('a', poll.id)}>
			<div class="percent percent-a" style="width: {$tweenedA}% " />
			<span>{poll.answerA} ({poll.votesA || 0})</span>
		</button>
		<button class="answer" on:click={() => handleVote('b', poll.id)}>
			<div class="percent percent-b" style="width: {$tweenedB}% " />
			<span>{poll.answerB} ({poll.votesB || 0})</span>
		</button>
		<div class="delete">
			<Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
		</div>
	</div>
</Card>

<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}
	p {
		margin-top: 6px;
		font-size: 14px;
		color: #aaa;
		margin-bottom: 30px;
	}
	button {
		border: none;
		width: 100%;
		text-align: left;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer:hover {
		opacity: 0.6;
	}
	span {
		display: inline-block;
		padding: 10px 20px;
	}
	.percent {
		height: 100%;
		position: absolute;
		box-sizing: border-box;
	}
	.percent-a {
		border-left: 4px solid #ff5588;
		background-color: rgba(217, 27, 66, 0.2);
	}
	.percent-b {
		border-left: 4px solid #45c496;
		background-color: rgba(69, 196, 150, 0.2);
	}
	.delete {
		margin-top: 30px;
		max-width: fit-content;
		text-align: end;
	}
</style>
