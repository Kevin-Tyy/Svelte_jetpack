<script>
  export let type = "primary"
  export let flat = false;
  export let inverse = false;

</script>
<button class={type} class:flat={flat} class:inverse={inverse}>
  <slot/>
</button>
<style>
  	button {
    width: 400px;
		border-radius: 5px;
		border: none;
		padding: 12px;
		color: white;
		cursor: pointer;
    box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.2);
	}
	button:hover {
		opacity: 0.9;
	}
	button:active {
		opacity: 0.8;
	}
  .primary {
    background-color: #ff5588;
  }
  .secondary {
    background-color: #45c496;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse{
    color: #ff5588;
    background-color: white;
  }
  .secondary.inverse{
    color : #45c496;
    background-color: white;
    border : 2px solid #45c496; 
  }
</style>