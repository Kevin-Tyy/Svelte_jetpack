<script>
// @ts-nocheck

	import { createEventDispatcher } from 'svelte';
	/**
	 * @type {String[]}
	 */
	export let tabs;
	/**
	 * @type {string}
	 */
	export let activeTab;
	const dispatch = createEventDispatcher();
</script>

<section>
	<div>
		<ul>
			{#each tabs as tab}
				<li>
					<a href={tab.link} on:click={() => dispatch('tabChange', tab)}>
						<div class:active={activeTab === tab}>
							{tab.title}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	section {
		margin-block: 40px;
	}
	a{
		color: #555;
		text-decoration: none;
	}
	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		padding: 0;
	}
	li {
		margin: 0px 16px;
		font-size: 18px;
		cursor: pointer;
	}
	.active {
		color: #d91b42;
		border-bottom: 2px solid #d91b42;
		padding-bottom: 8px;
	}
</style>
