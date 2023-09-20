import { writable } from 'svelte/store';
const pollStore = writable([
	{
		id: 2342,
		question: 'Python or JavaScript',
		answerA: 'Python',
		answerB: 'JavaScript',
		votesA: 9,
		votesB: 15
	}
]);


export default pollStore;