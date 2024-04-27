<script>
	import { createEventDispatcher } from "svelte";

	export let headerText;
    export let expanded = false;
    
    const dispatch = createEventDispatcher();
    
</script>

<div class="collapsible">
	<h2>
		<button aria-expanded={expanded} on:click={() => dispatch('toggle')}
            class:active={expanded}
			>{headerText}
			
		</button>
	</h2>

	<div class="contents" hidden={!expanded}>
		<slot />
	</div>
</div>

<style>
    .collapsible {
        border-radius: 5px;
        width: fit-content;
    }

    button {
    
        background-color: transparent;
        border: none;
        color: var(--primary);
        font-size: 2rem;
        display: flex;
        align-items: center;
        font-family: 'Arapey', serif;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
        &.active {
						color: var(--accent);
						scale: 1.1;
						translate: 0.5rem;
					}
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .contents {
        padding: 1rem;
    }
</style>
