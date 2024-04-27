<script lang='ts'>
	import { browser } from "$app/environment";
	import {showDarkModeStore, showSectionStore} from "$lib/stores/uiStore";
	import { createEventDispatcher, onMount } from "svelte";
	import { fade, slide } from "svelte/transition";
    export let year: number;

    const dispatch = createEventDispatcher();

    onMount(() => {
        if(browser && window.innerWidth < 768){
            showDarkModeStore.set(false);
            showSectionStore.set(false);
            return () => {
                showDarkModeStore.set(true);
                showSectionStore.set(true);
            }
        }
    })

    const years : Record<string, {description: string}> = {
        "2023": {
            description: `In 2023 I decided to pour my efforts into learning a lot of new technologies and frameworks without 
            focusing on a specific subset of them. I wanted to get a broad understanding of the web development ecosystem and 
            see what I liked and what I didn't. Learning how different frameworks and libraries work and how they solve problems
            allowed me to see the bigger picture and make more informed decisions in the future. 
            The main objective was to 'just build stuff' and see what I could come up with. I built a lot of small projects 
            most of them just for myself and my friends. 
            <br>
            <br>
            About halfway through the year, I found <a href="https://ntietz.com/blog/write-more-useless-software/">this blog post</a>
            by Nick Tietz that resonated with me. Who cares if you build something that no one uses? Who cares if you write something
            that no one reads? Probably even these words will only be read by me and a handful of people in the long run
            The point is to learn, or not even learn, just to build something for the joy of building something and the satisfaction
            that comes with it.`
        },
        "2024": {
            description: `
                2024 I decided to focus on building less but more polished projects. My mentality was the same, build for the sake 
                of building, but now I wanted to learn deeper rather than wider. I wanted to spend more time on the same couple 
                of technologies and master them as much as I could. This means that if the proyect was web based I would use 
                React, Next, tRPC for them. 
                `
        }
    }

</script>
<div class="active-project" in:fade out:fade={{duration: 0}}>
    <header>
        <h2>
            {year} Projects
        </h2>
        <button on:click={() => dispatch("close")}>
            <span class="material-symbols-outlined">close</span>
        </button>
    </header>
    <h3>
        {@html years[year].description}
    </h3>
</div>


<style lang='scss'>
    .active-project {
        background-color: var(--background);
        padding: 1rem;
        width: 100%;
        height: 100%;
        border: 2px solid var(--primary);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        :global(a){
            color: var(--accent);
            text-decoration: none;
            transition: color 0.2s ease-in-out;
        }
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
        color: var(--primary);
        transition: background 0.2s ease-in-out;
        *{
            font-size: 16px;
        }
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    
</style>