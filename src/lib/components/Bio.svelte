<script lang="ts">
	import moment from 'moment';
	const age = moment().diff(moment('2000-08-03'), 'years', true);
</script>

<section>
	<article>
		<h1>Fernando Sobral</h1>
		<h2>Full Stack Developer</h2>
	</article>
	<div class="bio-container">
		<button
			on:click={() => {
				// Open pdf
				window.open('/ResumeEN.pdf', '_blank');
			}}
		>
			CV <span class="material-symbols-outlined">description</span>
		</button>
		<article class="bio">
			<p>
				I am a {parseInt(age.toString())}-year-old developer and soon to be Software Engineer from
				ORT University in Uruguay. I have been working as a Full Stack Developer for the past 2
				years at
				<a href="https://2innovateit.com/" target="_blank">2innovate</a>. Some of the technologies I
				have been working with lately include: React(Next.js), Svelte/Sveltekit, Node.js (Express),
				Rust(Axum), PostgreSQL, SQLite, Docker, among others.
			</p>
		</article>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.bio {
		margin-right: 1rem;
		margin-bottom: 1rem;
		max-width: 350px;
		width: 95%;
		align-self: flex-end;
		border: 2px solid var(--primary);
		padding: 1rem;
		background-color: var(--background);
		box-shadow: 5px 5px 0 0 var(--accent);
		p {
			width: 100%;
			font-weight: 400;
			text-align: start;
			font-size: clamp(1rem, 2vw, 1.2rem);
			color: var(--primary);
			font-family: 'Nunito Sans', sans-serif;
			a {
				color: var(--accent);
				text-decoration: none;
				font-weight: 700;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.bio-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column-reverse;
		@media (min-width: 768px) {
			flex-direction: row;
			align-items: flex-end;
		}
	}

	button {
		background-color: var(--background);
		cursor: pointer;
		border: none;
		padding: 0.5rem 1rem;
		color: var(--primary);
		box-shadow: 5px 5px 0 0 var(--accent);
		border: 2px solid var(--primary);
		border-radius: 5px;
		span {
			font-size: 1.5rem;
		}
		&:hover {
			background-color: var(--primary);
			color: var(--background);
			span {
				color: var(--background);
			}
		}
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 700;
		font-size: 1rem;
		gap: 0.5rem;
	}
</style>
