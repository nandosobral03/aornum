<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let selectedImage = {
		url: '',
		alt: ''
	};

	let dispatch = createEventDispatcher();
</script>

<div 
    on:click={() => dispatch('close')} 
    on:keydown={(e) => e.key === 'Escape' && dispatch('close')}
    transition:fade|global={
        {
            duration: 150,
        }
    }
    >
	<img src={selectedImage.url} alt={selectedImage.alt} />
</div>

<style lang="scss">
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
		display: grid;
		place-items: center;
		img {
			max-height: 95vh;
			max-width: 95vw;
		}
	}
</style>
