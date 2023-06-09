<script lang="ts">
	import { onMount } from 'svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Bio from '../lib/components/Bio.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { showSectionStore } from '$lib/stores/uiStore';
    let activeSection = 0;
    let scrollContainer: HTMLDivElement;
    let ranges: { offset: number, height: number }[] = [];



    const handleScroll = (e: Event) => {
        let { scrollTop } = e.target as HTMLElement;
        let section = ranges.find(range => scrollTop >= range.offset - 5 && scrollTop <= range.offset + range.height + 5);
        if (section) {
            activeSection = ranges.indexOf(section);
        }else{
            activeSection++;
        }
    }


    const resize = () => {
        console.log('resize');
        ranges = Array.from(scrollContainer.querySelectorAll('section')).map((section: HTMLElement) => {
            return {
                offset: section.offsetTop,
                height: section.offsetHeight
            }
        });
    }

    onMount(() => {
        ranges = Array.from(scrollContainer.querySelectorAll('section')).map((section: HTMLElement) => {
            return {
                offset: section.offsetTop,
                height: section.offsetHeight
            }
        });
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    });

    

</script>

<div class="content" on:scroll={handleScroll} bind:this={scrollContainer}>
	<Bio />
    <Projects />
    <Contact />
    {#if $showSectionStore}
        <nav>
            {#each ranges as section, i}
            <div class="section-indicator" class:active={activeSection === i} 
                    on:click={() => scrollContainer.scrollTo({top: section.offset, behavior: 'smooth'})}
                    on:keydown={(e) => e.key === 'Enter' && scrollContainer.scrollTo({top: section.offset, behavior: 'smooth'})}
                    >
                    <div class="inner-diamond" >
                    </div>
            </div>   
                
            {/each}
        </nav>
    {/if}
</div>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		z-index: 1;
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 32px;
        scroll-snap-type: y mandatory;
        & > :global(section){
                min-height: 100%;
                max-height: 100%;
                width: 100%;
                padding: 2rem;
                scroll-snap-align: start;
        }
	}
	

    nav{
        position: absolute;
        top: calc(50% - 50px);
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .section-indicator{
            width: 10px;
            height: 10px;
            background-color: var(--primary);
            rotate: 45deg;
            display: flex;
            cursor: pointer;
            .inner-diamond{
                margin: auto;
                width: 75%;
                height: 75%;
                background-color: var(--background);
                transition: all 0.3s ease-in-out;
              
            }
            &.active{
                scale: 1.5;
                .inner-diamond{
                    background-color: var(--accent) !important;
                }
            }
        }
    }

  
</style>
