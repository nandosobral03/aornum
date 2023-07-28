<script lang="ts">
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import type { LayoutServerData } from './$types';
    export let data: LayoutServerData;
	import { showDarkModeStore } from '$lib/stores/uistore';
    import { loadFull } from "tsparticles";
	let particlesModule : any;
    let darkMode = data.darkmode ? data.darkmode : false;
	const config = {
		particles: {
            number: {
				value: 150,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: darkMode ? '#f5f5f5' : '#252424'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: true,
					speed: 0.5,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 2,
				random: false,
			},
            links: {
                enable: false,
                color: "#000"
            },
            move: {
                enable: true
            },
		},
		fullScreen: {
			enable: false,
			zIndex: 2
		},
		
	};

	let onParticlesLoaded = (event:any) => {
        const particlesContainer = event.detail.particles;
		
    };

	let ParticlesComponent:any;

	onMount(async () => {
		config.particles.color.value = darkMode ? '#f5f5f5' : '#252424';
        particlesModule = await import("svelte-particles");
		ParticlesComponent = particlesModule.default;
	});


	let particlesInit = async (main: any) => {
        await loadFull(main);
    };

    const loadParticles = async () => {
		config.particles.color.value = darkMode ? '#f5f5f5' : '#252424';
		document.getElementById('canvas')?.style.setProperty('position', 'absolute !important');
		ParticlesComponent = particlesModule.default;
	}
	
	const toggleDarkMode = () => {
        darkMode = !darkMode;
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
		config.particles.color.value = darkMode ? '#f5f5f5' : '#252424';
        Cookies.set('darkmode', darkMode ? 'dark' : 'light');
        loadParticles();        
    }

</script>

<div>
	<section>
		{#if $showDarkModeStore}
			<button class="material-symbols-outlined" on:click={toggleDarkMode} on:keydown={(e) => e.key === 'Enter' && toggleDarkMode()}>
				{#if darkMode}
				light_mode
				{:else}
				dark_mode
				{/if}
			</button>
		{/if}
		<slot />
		<svelte:component
			this="{ParticlesComponent}"
			options="{config}"
			on:particlesLoaded="{onParticlesLoaded}"
			particlesInit="{particlesInit}"
			id="particles"
		/>
	</section>
</div>

<style lang="scss">


	section{
		position: relative;
		width: 100%;
		height: 100%;
        border: 2px solid var(--primary);
		
		background-color: var(--background);
		:global(#particles) {
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100%);
		height: calc(100%);
		transition: all 0.3s ease-in-out;
		z-index: 0;
	}
	}

    div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		padding: clamp(0.5rem, 3vw, 1rem);
		position: relative;
		max-height: 100%;
		 box-shadow: 5px 5px 0 0 var(--accent);
		overflow: auto;
		:global(canvas){
			position: absolute !important;
			top: 0 !important;
			left: 0 !important;
			width: 100% !important;
			height: 100% !important;
			z-index: 0 !important;
	}
    }
	button{
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
		border: none;
		background: none;
		outline: none;
		user-select: none;
		color: var(--primary);
		&:hover{
			color: #ccc;
		}
		font-size: 1.2rem;
		z-index: 2;
	}
	
</style>
