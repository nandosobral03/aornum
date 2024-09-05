<script lang="ts">
	import { browser } from '$app/environment';
	import type { Project } from '$lib/models/project.model';
	import { showDarkModeStore, showSectionStore } from '$lib/stores/uistore';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let project: Project;

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (browser && window.innerWidth < 768) {
			showDarkModeStore.set(false);
			showSectionStore.set(false);
			return () => {
				showDarkModeStore.set(!browser && window.innerWidth < 768);
				showSectionStore.set(!browser && window.innerWidth < 768);
			};
		}
	});
</script>

<div class="active-project" in:fade|global out:fade|global={{ duration: 0 }}>
	<header>
		<h2>
			{project.name}
		</h2>
		<button on:click={() => dispatch('close')}>
			<span class="material-symbols-outlined">close</span>
		</button>
	</header>
	<h3>
		{@html project.description} <a href={project.name.toLowerCase()}>learn more!</a>
	</h3>
	<div class="image-contianer">
		<img src={project.coverImage} alt={`${project.name} cover image`} />
	</div>
</div>

<style lang="scss">
	.active-project {
		background-color: var(--background);
		padding: 1rem;
		width: 100%;
		height: 100%;
		border: 2px solid var(--primary);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.image-contianer {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-grow: 1;
			img {
				border-radius: 4px;
				width: 100%;
				max-width: calc(100% - 2rem);
				max-height: 100%;
				aspect-ratio: 16/9;
			}
		}
		:global(a) {
			color: var(--accent);
			text-decoration: none;
			transition: color 0.2s ease-in-out;
		}
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--primary);
		transition: background 0.2s ease-in-out;
		* {
			font-size: 16px;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
