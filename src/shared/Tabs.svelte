<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';

	/**
	 * @type {String[]}
	 */
	export let tabs;
	/**
	 * @type {string}
	 */
	// You can access the current path using the `$page` store
	let currentPath = $page.route.id;
	beforeUpdate(() => {
		currentPath = $page.route.id;
	});
</script>

<section>
	<div>
		<ul>
			{#each tabs as tab}
				<li>
					<a href={tab.link}>
						<div class:active={tab.link === currentPath}>
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
	a {
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
		color: #ff5588;
		border-bottom: 2px solid #ff5588;
		padding-bottom: 8px;
	}
</style>
