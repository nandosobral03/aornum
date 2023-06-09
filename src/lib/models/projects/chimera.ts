import type { ProjectDetails } from "../project.model";

export const chimera: ProjectDetails = {
    name: "Chimera",
    links: [
        {
            url: "https://github.com/nandosobral03/chimera/",
            name: "Github"
        },
        {
            url: "http://chimera.aornum.xyz",
            name: "Live"
        }
    ],
    description: `
        Chimera is a Minesweeper game that provides a daily challenge. It takes heavy inspiration from other daily games
        like <a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank">NYT Spelling Bee</a> and <a href="https://www.nytimes.com/puzzles/wordle" target="_blank">NYT Wordle</a>. 
        <br><br>
        The idea was to take the idea of a daily challenge and apply it to Minesweeper. Each day a new board is generated together with a starting point,
        the goal is to finish the board starting from that point the fastest. The mines are placed randomly, always allowing for a big starting area.
        Chimera also comes with a leaderboard that shows the fastest times for each day and the highest overall winstreaks. Each day 
        also has its own heatmap that shows the places where people clicked on bombs the most. The current day heatmap being only visible 
        to those who have completed the current day.
        On either winning or losing a game, the user is presented with a shareable link that shows the result of the game, their current 
        stats and a sharaeable image created of the board that doesn't spoil the location of the bombs.
        <br><br>
        The project is live and hosted on <a href="http://chimera.aornum.xyz" target="_blank">chimera.aornum.xyz</a> and can be accessed by anyone on, sadly 
        not many people play it so the leaderboards are not very competitive and the heatmaps are not very interesting. But I still think it's a fun game to play.
        The project is also mobile friendly so it can be played on mobile devices. 
    `,
    technologies: `
        The frontend of the project was built using SvelteKit, since this project required multiple different pages,
        I decided to use SvelteKit to take advantage of the routing and server side rendering. The backend was built 
        in Rust with the Axum framework. 
        `,
    thingsLearned: `
        I continued to learn more about SvelteKit, which I really enjoyed using. I also learned more about Rust, a language I 
        have been learning on and off for a while now with no real project to use it on. With Axum I learned how to apply it 
        to a real project and how to use it to create a REST API. I also learned how to use the Rust ORM Diesel, which I used 
        to connect to the database, run migrations and create the models.
        <br><br>
        At this point I still wasn't using SvelteKit to it's full potential, I was still doing a lot of the rendering on the client, something I have
        since changed in my more recent projects, for example this very website. 
        Making it mobile friendly was also a new challenge, Since the board was a 16x30 grid, it was hard to make it fit on a mobile screen, and 
        flipping it in TypeScript would be a painfull process. So I decided to rotate it with css and rotate everything else back, this way I could
        keep the same code for the board and just rotate it on mobile devices.
        `,
    thingsIWouldDoDifferently: `
        I would probably make it so that the client is completely unaware of the backend server, using SvelteKit's endpoints to make the requests.
        and using cookies for authentication. I would also like to add more features to the game, make other leaderboards, different difficulties 
        each day, etc.
    `,
    images: [
        {
            url: "/projects/chimera/0.png",
            alt: "Chimera Home Page"
        },
        {
            url: "/projects/chimera/1.png",
            alt: "Chimera first time playing"
        },
        {
            url: "/projects/chimera/2.png",
            alt: "Chimera playing as guest"
        },
        {
            url: "/projects/chimera/3.png",
            alt: "Chimera navigating page",
        },
        {
            url: "/projects/chimera/4.png",
            alt: "Chimera heatmap of the current day",
        },
        {
            url: "/projects/chimera/5.png",
            alt: "Chimera heatmap of a day with 2 explosions",
        },
        {
            url: "/projects/chimera/6.png",
            alt: "Chimera losing a game",
        },
        {
            url: "/projects/chimera/7.png",
            alt: "Chimera share result",
        },
        {
            url: "/projects/chimera/8.png",
            alt: "Chimera leaderboards",
        }
]
}