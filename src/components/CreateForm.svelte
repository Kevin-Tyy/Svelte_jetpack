<script>
	import Button from './Button.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher()
	let fields = {
		question: '',
		answerA: '',
		answerB: ''
	};
	let valid = false;
	let errors = {
		question: '',
		answerA: '',
		answerB: ''
	};
	const submitHandler = () => {
		valid = true;
		if (fields.question.trim().length < 5) {
			valid = false;
			errors.question = 'Question must be at least 5 characters';
		} else {
			errors.question = '';
		}

		if (fields.answerA.trim().length < 1) {
			valid = false;
			errors.answerA = 'Answer A cannot be empty';
		} else {
			errors.answerA = '';
		}

		if (fields.answerB.trim().length < 1) {
			valid = false;
			errors.answerB = 'Answer B cannot be empty';
		} else {
			errors.answerB = '';
		}
		if (valid) {
      let poll = {...fields, voteA : 0, voteB : 0,  id : Math.floor(Math.random() * 10000)}
      dispatch('add_poll', poll);
    }
	};
</script>

<form on:submit|preventDefault={submitHandler}>
	<div class="form-field">
		<label for="question">Poll Question</label>
		<input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
	</div>
	<div class="form-field">
    <label for="answer-x">Answer A</label>
		<input type="text" id="answe-x" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
	</div>
	<div class="form-field">
    <label for="answer-y">Answer B</label>
		<input type="text" id="answer-y" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
	</div>
	<Button type="secondary">Add poll</Button>
</form>

<style>
	form {
		width: 400px;
		margin: 0 auto;
	}
	.form-field {
		margin: 18px auto;
	}
	input {
    width: 100%;
		border-radius: 6px;
		padding: 10px 5px;
		border: 3px solid #e6e6e6;
		outline: none;
		transition: 0.2s;
	}

	input:focus-within {
		border: 3px solid #ff5588;
	}
	label {
		display: block;
		margin: 10px auto;
		text-align: left;
		color: #555;
	}
  .error{
    font-size: 12px;
    color: #ff5588;
    font-weight: bold;
  }
</style>
