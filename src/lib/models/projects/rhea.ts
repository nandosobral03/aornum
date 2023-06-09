import type { ProjectDetails } from "../project.model";

export const rhea: ProjectDetails = {
    name: "Rhea",
    links: [
        {
            url: "https://github.com/nandosobral03/rhea",
            name: "Github"
        },
        {
            url: "http://rhea.aornum.xyz/",
            name: "Live"
        }
    ],
    description: `
        Rhea is a <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> simulator that I made in my free time.
        It's a simple project that I made to familiarize myself a bit more with Svelte. I liked the idea of creating a game of life simulator
        but I wanted to make it slightly different from others; instead of having an infinite grid I wanted to have a finite grid that would
        wrap around. This means that not all the patterns work the same way as they do in a normal game of life simulator. Different grid sizes create different
        spaceships and oscillators. 

        The project includes the ability to save and load patterns, change the speed of the simulation, play/pause the simulation, and create a random pattern. That will most
        likely be reduced to simple oscillators. The patterns sections comes loaded with a couple of spaceships and a self destructing pattern. If you are using it on a desktop
        you can also use the 'q' and 'e' keys to rotate the selected pattern. And draw by pressing and holding the left mouse button and erase by pressing and holding the right
        For this project I also wanted to make the website be responsive and work on mobile devices. Which meant resizing the grid and moving the pattern section
        to a toggleable sidebar.

        The project is live and hosted on <a href="http://rhea.aornum.xyz/" target="_blank">rhea.aornum.xyz</a> and you can play around with it. 
    `,
    thingsLearned: `
        This was my second project using Svelte and I learned a lot about how to use it. I also learned a lot about how to make a website responsive so it could be used from 
        mobile devices. Since I used CSS grid for the grid I had to learn how to make it responsive and resize the grid depending on the screen size. 
    `,
    thingsIWouldDoDifferently: `
        I would probably use a different grid system. I used CSS grid for this project and it worked well but I think it would have been easier to use a canvas instead.
        I would also like to add more patterns to the default patterns section. A good addition might be a "store" where people can upload and select patterns made by others
        to play around with. I would also like to refine the controls to make it easier to use in mobile devices.But overall I was happy
        with how it turned out and it was a fun project to make. 
    `,
    images: [
        {
            url: "/projects/rhea/0.png",
            alt: "Rhea on desktop with an empty grid"
        },
        {
            url: "/projects/rhea/1.png",
            alt: "Rhea on desktop with a random pattern"
        },
        {
            url: "/projects/rhea/2.png",
            alt: "Rhea on desktop with a pattern loaded"
        },
        {
            url: "/projects/rhea/3.png",
            alt: "Rhea on desktop with a pattern selected as brush, hovering over the grid"
        },
        {
            url: "/projects/rhea/4.png",
            alt: "Rhea on desktop with a square pattern selected as brush, after placing it on the grid"
        },
        {
            url: "/projects/rhea/5.png",
            alt: "Rhea on desktop creating a brush on the sidebar"
        },
        {
            url: "/projects/rhea/6.png",
            alt: "Rhea on desktop using the create random pattern button"
        },
        {
            url: "/projects/rhea/7.png",
            alt: "Rhea on mobile after placing a pattern on the grid" 
        },
        {
            url: "/projects/rhea/8.png",
            alt: "Rhea on mobile with the sidebar open"
        },
        {
            url: "/projects/rhea/9.png",
            alt: "Rhea on mobile with the sidebar open after placing a pattern on the grid"
        }
    ]
};