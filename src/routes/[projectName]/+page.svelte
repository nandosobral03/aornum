<script lang="ts">
	import ImageZoom from '$lib/components/ImageZoom.svelte';
import type { PageServerData } from './$types';

	export let data: PageServerData;
    let selectedImage = {
        url: '',
        alt: ''
    }
    let zoomed = false;
</script>

<article>
	<section class="title">
		<a class="go-back" href="/">
			<span class="material-symbols-outlined" style="font-size: 2rem;">
				arrow_back_ios_new				
			</span>
		</a>
		<h1>{data.name}</h1>
        {#each data.links as link}
            <a href="{link.url}" target="_blank">{link.name}</a>
        {/each}
    </section>
	<section>
		<h2>Description</h2>
		<p>
			{@html data.description}
		</p>
	</section>
	{#if data.technologies}
		<section>
			<h2>Technology Stack</h2>
			<p>
				{@html data.technologies}
			</p>
		</section>
	{/if}
	{#if data.thingsLearned}
		<section>
			<h2>Things I learned</h2>
			<p>
				{@html data.thingsLearned}
			</p>
		</section>
	{/if}
	{#if data.thingsIWouldDoDifferently}
		<section>
			<h2>Things I would do differently</h2>
			<p>
				{@html data.thingsIWouldDoDifferently}
			</p>
		</section>
	{/if}
	{#if data.images && data.images.length > 0}
		<section>
			<h2>Images</h2>
			<div class="images">
				{#each data.images as image}
					<img src={image.url} alt={image.alt} on:click={() => {
                        selectedImage = image;
                        zoomed = true;
                    }}
                    on:keydown={e => e.key === 'Enter' && (selectedImage = image, zoomed = true)}
                    
                    />
				{/each}
			</div>
		</section>
	{/if}
</article>
{#if zoomed}
    <ImageZoom {selectedImage} on:close={() => zoomed = false} />
{/if}
<style lang="scss">
	article {
		width: 100%;
		height: 100%;
		padding: 2rem 3rem;
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 16px;
		position: relative;
		:global(a) {
			color: var(--accent);
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
		:global(p) {
			color: var(--primary);
			font-family: 'Nunito Sans', sans-serif;
		}
		:global(h2) {
			color: var(--accent);
			padding-left: 1rem;
		}
	}
    section{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        &.title{
            flex-direction: row;
            align-items: flex-end;
            a{
                padding-bottom: 1rem;
                font-family: 'Nunito Sans', sans-serif;
                text-transform: lowercase;
                &:hover{
                    text-decoration: underline;
                }
            }
			.go-back{
				align-self: center;
				padding-bottom: 0;
				scale: 0.8;
				&:hover{
					cursor: pointer;
				}
			}
		}
    }

	.images {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 8px;
		img {
            width: 100%;
            cursor: pointer;
			height: 100%;
			object-fit: cover;
			border: 1px solid var(--primary);
			box-shadow: 2px 2px 0 0 var(--accent);
            &:hover{
                filter: brightness(1.2);
            }
		}
	}


    
</style>
