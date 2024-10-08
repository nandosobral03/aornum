<script lang="ts">
	import type { Project } from '$lib/models/project.model';
	import ActiveYear from './ActiveYear.svelte';
	import ActiveProject from './ActiveProject.svelte';
	import Collapsable from './Collapsable.svelte';

	let projects: Project[] = [
		{
			year: 2023,
			name: 'Eos',
			description: `
				Eos is a starterpage that combines the things I use the most when I launch
				a new tab with extra functionality including notetaking, RSS feed aggregation,
				spotify tracking stats and more.
			`,
			coverImage: '/covers/eos.png'
		},
		{
			year: 2023,
			name: 'Rhea',
			description: `
				Rhea is <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> simulator that I made in my free time.
				It's a simple project that I made to get to know the framework better. A difference I wanted to have from other game of life simulators is that
				the simulation loops around the edges of the grid, so that the cells on the edges can interact with the cells on the opposite side.
				It also comes with a panel that allows you to create patterns and use them as a brush to draw on the grid.
			`,
			coverImage: '/covers/rhea.png'
		},
		{
			year: 2023,
			name: 'Polemos',
			description: `
				Polemos is a text based fight simulator. It draws clear inspiration from the <a href="https://brantsteele.net/hungergames/"> BrantSteele's Hunger Games Simulator</a>.
				My friends and I liked playing around with the Hunger Games Simulator, but we wanted to make something that was more customizable that allowed for far more players,
				events and stat tracking between rounds to keep track of the winners and losers. So I made Polemos for us to use
			`,
			coverImage: '/covers/polemos.png'
		},
		{
			year: 2023,
			name: 'Minos',
			description: `
				Minos is a pathfinding visualizer that I made, my main goal with this proyect was to revisit some of the pathfinding algorithms
				I learned in college and to try out Next.js. In the spirit of revisiting the algorithms added a section to learn
				more about them, their premise and how their implementation works in TypeScript.
			`,
			coverImage: '/covers/minos.png'
		},
		{
			year: 2023,
			name: 'Chimera',
			description: `
					Chimera is a Minesweeper game that provides a daily challenge, similar to games like NYT's Wordle. Each board is unique
					every day, and all players are given the same starting position. It also includes a leaderboard that tracks the highest
					winstreaks and statistics of previous days, with heatmaps to show in what bombs the players exploded the most.
				`,
			coverImage: '/covers/chimera.png'
		},
		{
			year: 2023,
			name: "Spring'83",
			description: `
					Spring '83 is a protocol for communication dreamed up by <a href="https://www.robinsloan.com/"> robin sloan</a>. This protocol is based on the distribution of "boards". Boards are HTML
					fragments, limited to 2217 bytes, unable to execute JavaScript or load external resources, but otherwise unrestricted.
					This project entailed creating both a client and a server that implements this protocol
					according to the specification. As well as a <a href="https://github.com/nandosobral03/spring83-keygen/" target="_blank">key generator</a> that allows users to generate their own keys.
				`,
			coverImage: '/covers/spring83.png'
		},
		{
			year: 2023,
			name: 'Nochan',
			description: `
					nochan is a ephemeral imageboard that I made as a way to learn more about Next, Tailwind and Bun! It allows users to create threads and
					post images that are stored in a database and are deleted after 24 hours.
				`,
			coverImage: '/covers/nochan.png'
		},
		{
			year: 2023,
			name: 'Deadair',
			description: `
				Deadair is a new way to watch youtube in the background. It allows you to create a "channels" with set schedules that run throughout the week,
				allowing you to hop in and out of the constantstream of content, just like a TV channel would. It also allows you to create your own channels
				and share them with your friends.
			`,
			coverImage: '/covers/deadair.png'
		},
		{
			year: 2024,
			name: 'Momentum',
			description: `
				Momentum is a daily habit tracker that I made to help me keep track of my habits. It allows you to create habits lists and challenges that you
				and other users can subscribe to and complete, getting badges and rewards for completing them.
			`,
			coverImage: '/covers/momentum.png'
		},
		{
			year: 2024,
			name: 'Today In',
			description: `
				Today In is a subreddit post aggregator that allows you to see a summary of the top posts of the day in a subreddit. Giving you a quick overview of
				the sentiment of the subreddit and the most popular posts and comments so far. It uses Google's Gemini to summarize the content and give
				the user a newspaper-like experience.
			`,
			coverImage: '/covers/todayin.png'
		},
		{
			year: 2024,
			name: 'Polemos Royale',
			description: `
			Polemos Royale is a remake of the original Polemos, but with a battle royale twist. It allows for more players, more events and more customization and a map through which the players can move and roll dice to determine the outcome of the events.
			`,
			coverImage: '/covers/polemos-royale.png'
		}
	];
	let selected = -1;
	let activeYear = -1;
	let showYearInfo = false;

	let projectsByYear = projects.reduce((acc, project) => {
		if (!acc[project.year]) acc[project.year] = [];
		acc[project.year].push(project);
		return acc;
	}, {} as Record<number, Project[]>);
</script>

<section>
	<article>
		<div>
			<h1>Projects</h1>
			<div>
				{#each Object.keys(projectsByYear) as year}
					<Collapsable
						headerText={`${year} Projects`}
						on:toggle={() => {
							if (!showYearInfo && activeYear == parseInt(year)) {
								showYearInfo = true;
							} else {
								activeYear == parseInt(year) ? (showYearInfo = false) : (showYearInfo = true);
								activeYear == parseInt(year) ? (activeYear = -1) : (activeYear = parseInt(year));
							}
							selected = -1;
						}}
						expanded={activeYear == parseInt(year)}
					>
						<ul>
							{#each projectsByYear[parseInt(year)] as project}
								<li
									class:active={selected === projects.indexOf(project)}
									on:click={() => {
										if (selected === projects.indexOf(project)) {
											selected = -1;
											showYearInfo = false;
										} else {
											selected = -1;
											showYearInfo = false;
											setTimeout(() => (selected = projects.indexOf(project)), 150);
										}
									}}
									on:keydown={(e) => {
										if (e.key === 'Enter') selected = projects.indexOf(project);
									}}
								>
									{project.name}
								</li>
							{/each}
						</ul>
					</Collapsable>
				{/each}
			</div>
		</div>
		{#if selected >= 0}
			<div class="active-project">
				<ActiveProject project={projects[selected]} on:close={() => (selected = -1)} />
			</div>
		{/if}
		{#if selected == -1 && activeYear != -1 && showYearInfo}
			<div class="active-project">
				<ActiveYear
					year={activeYear}
					projects={projectsByYear[activeYear]}
					on:close={() => {
						selected = -1;
						activeYear = -1;
					}}
					on:select={(e) => {
						selected = projects.indexOf(e.detail.project);
					}}
				/>
			</div>
		{/if}
	</article>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: clamp(2rem, 8vw, 4rem);
		font-weight: 700;
		color: var(--primary);
	}

	article {
		padding: clamp(1rem, 3vw, 2rem);
		display: flex;

		flex-direction: row;
		flex-grow: 1;
		div {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			ul {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				height: 100%;
				list-style: none;
				li {
					width: fit-content;
					cursor: pointer;
					color: var(--primary);
					border-radius: 1rem;
					font-family: 'Nunito Sans', sans-serif;
					font-weight: 400;
					font-size: clamp(1rem, 3vw, 1.5rem);
					user-select: none;
					&:hover {
						text-decoration: underline;
					}
					&.active {
						color: var(--accent);
						scale: 1.2;
						translate: 0.5rem;
					}
				}
			}
		}
	}

	.active-project {
		box-shadow: 5px 5px 0 0 var(--accent);
		@media (max-width: 768px) {
			box-shadow: none;
			position: absolute;
			top: 0;
			left: 0;
			background-color: var(--background);
			z-index: 100;
			height: 100%;
			width: 100%;
		}
	}
</style>
