<script lang="ts">
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import type { LayoutServerData } from './$types';
    export let data: LayoutServerData;

    let darkMode = data.darkmode ? data.darkmode : false;
	const config = {
		particles: {
			number: {
				value: 500,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: '#252424'
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
				value: 0.9,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0,
					sync: false
				}
			},
			size: {
				value: 1,
				random: false,
				anim: {
					enable: false,
					speed: 4,
					size_min: 0.3,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 1,
				direction: 'none',
				random: true,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 600
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: false,
					mode: 'bubble'
				},
				onclick: {
					enable: false,
					mode: 'repulse'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 250,
					size: 0,
					duration: 2,
					opacity: 0,
					speed: 3
				},
				repulse: {
					distance: 400,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	};

	onMount(() => {
		config.particles.color.value = darkMode ? '#f5f5f5' : '#252424';
		loadParticles();
	});

	const loadParticles = () => {
		// @ts-ignore
		particlesJS('particles', config);
	};

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
		<button class="material-symbols-outlined" on:click={toggleDarkMode} on:keydown={(e) => e.key === 'Enter' && toggleDarkMode()}>
			{#if darkMode}
			light_mode
			{:else}
			dark_mode
			{/if}
		</button>
		<slot />
		<div id="particles">
		</div>
	</section>
</div>

<style lang="scss">
	#particles {
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100%);
		height: calc(100%);
		transition: all 0.3s ease-in-out;
		z-index: 0;
	}

	section{
		position: relative;
		width: calc(100% - 1rem);
		height: calc(100% - 1rem);
        border: 2px solid var(--primary);
		background-color: var(--background);
	}

    div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		padding: 1rem;
		position: relative;
		max-height: 100%;
		
		overflow: auto;
		:global(canvas){
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
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
