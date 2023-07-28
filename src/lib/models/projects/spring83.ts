import type { ProjectDetails } from "../project.model";

export const spring83: ProjectDetails = {
    name: "Spring '83",
    links: [
        {
            url: "https://github.com/nandosobral03/spring83/",
            name: "Github"
        },
        {
            url: "https://github.com/nandosobral03/spring83-keygen/",
            name: "Key genenrator"
        },
        {
            url: "https://spring83.aornum.xyz",
            name: "Live Client"
        },
        {
            url: "http://spring83-server.aornum.xyz",
            name: "Live Server"
        }

    ],
    description: `
        This project entailed the implementation of both a client and a server for the speculative protocol Spring83. Spring '83, first ideated by 
        Robin Sloan on his blog and later specified in the Spring '83 specification Draft. I recommend reading the specification before as to 
        understand the protocol better.
        The idea behind it is to provide a simple, expressive, and predictable way to follow people who are interesting to the user, regardless of 
        the frequency and type of content they share. This could range from a random thought shared every day, a blog post every week, or an art 
        project every two years. The protocol is designed to work across media, allowing users to follow writers, musicians, programmers, theorists, 
        and more.
        <br><br>
        Users create "boards", these are HTML fragments, limited to 2217 bytes, unable to execute JavaScript or load external resources, but otherwise 
        unrestricted. Boards invite publishers to use all the richness of modern HTML and CSS and to be creative with how they present their content 
        while optimizing for the constraints of the protocol. Boards are then published to a server, which makes them available to everyone.
        <br><br>
        Instead of publishing under a username, publishers publish with a public key, there is no need to have an account to post your content. 
        Boards posted need to be signed with the publisher's private key, this allows the server to verify that the board was indeed posted by the 
        publisher. The server then stores the board and makes it available to everyone. Only one post can exist per key at a time, this means that the 
        publisher can update their board at any time, but the old board will be lost.
        <br><br>
        Keys must match a specific pattern to be valid as to force publishers to invest some amount of work into generating them, keys also have a 
        limited lifespan, keys have a maximum lifespan of 2 years, expiring when the date represented by its last 4 digits is reached. 
        <br><br>
        I first learned about the protocol on <a href="https://hnr.fyi/spring.html"> honor ash's blog</a> and was immediately interested in it, 
        reading the original <a href="https://www.robinsloan.com/lab/specifying-spring-83/"> blog post</a> and the incremental specifications that 
        followed peaked my interest in the protocol. I decided to implement it as a way to learn more about it, using it as a way to continue working 
        on my backend skills particularly using Rust.
    `,
    technologies: `
        The client was built using SvelteKit, I decided to use SvelteKit because it's my favorite web framework at the moment and this project could use 
        the server side rendering and routing that SvelteKit provides. I implemented authorization with JWT tokens, which are stored in a cookie, allowing
        server to render the page using the user's data, allowing for a better user experience. 
        <br><br>
        The server was built using Rust and the Axum framework, after a couple months of Rust I felt comfortable enough to use it on this project, learning 
        from previous projects I felt I had a better grasp than ever on how to structure the project and started using some idiomatic Rust patterns, such as 
        error handling and From/Into traits. 
        <br><br>
        As for the database, this time I went for a NoSQL database, MongoDB, I decided to use MongoDB because it felt better suited for this project, since
        the data is not very structured and I didn't need to do any complex queries. 
        <br><br>
        I also created a key generator I created 2 of them, one is integrated into the client, allowing users to generate keys from a webpage, this approach
        allows users to generate keys without having to install anything, with the downside of taking a long time to generate the keys since its done on the browser,
        single threaded. The other key generator is a CLI tool, written in Rust, this approach is much faster the validation is done validating specific nibbles and
        allows for multithreading which reduces the time it takes to generate the keys somewhere in the range of 50-100x faster. The local generator also lets the user specify the year the keys will expire,
        while the web generator always generates keys that expire in at most 2 years.
        <br><br>
        `,
    thingsLearned: `
        I learned a lot about Rust, I feel much more comfortable with the language now, I also learned a lot about Axum and how to use it to create a rich REST API 
        with authentication and authorization. 
        <br><br>
        This project also included a lot of cryptography, brushing up on my knowledge of the subject and learning more about it. Particularly about the Elliptic Curve and 
        asymmetric cryptography. 
        <br><br>
        When it comes to the client, I continued to improve my skills with SvelteKit, learning more about the framework and how to use it to create a rich client side
        application while also making it mobile responsive.
        <br><br>
        Finally the deploy process required me to utilize Docker, something I had done before but made me learn more about it and how to use it to deploy a project.
        The server image is created on a multi-stage build, first building the project and then copying the binary to a new image, this allows for a much smaller
        image, something I had tried to do before but had fallen short, since I had only deleted the source files but not the build tools.
        `,
    images: [
        {
            url: "/projects/spring83/0.png",
            alt: "Spring83 client home page, showing recently updated boards"
        },
        {
            url: "/projects/spring83/1.png",
            alt: "Spring83 client board page, showing the board's content, and detail about it"
        },
        {
            url: "/projects/spring83/10.png",
            alt: "Spring83 client following page"
        },
        {
            url: "/projects/spring83/2.png",
            alt: "Spring83 client board page, showing the board's code, and detail about it"
        },
        {
            url: "/projects/spring83/3.png",
            alt: "Spring83 submition page, showing the text editor and how the board is rendered in real time"
        },
        {
            url: "/projects/spring83/4.png",
            alt: "Spring83 submition page, showing the text editor and the information about how to publish the board"
        },
        {
            url: "/projects/spring83/5.png",
            alt: "Spring83 submition page, showing the sign and publish modal, where the user can enter his keys or use his username and password to sign and publish the board"
        },
        {
            url: "/projects/spring83/6.png",
            alt: "Spring83 about page, showing the information about the protocol and the project"
        },
        {
            url: "/projects/spring83/7.png",
            alt: "Spring83 server hello page, showing the server's information"
        },
        {
            url: "/projects/spring83/11.png",
            alt: "Spring83 client generate key page"
        },
        {
            url: "/projects/spring83/8.png",
            alt: "Spring83 client homepage on mobile, showing the recently updated boards"
        },
        {
            url: "/projects/spring83/9.png",
            alt: "Spring83 client navigation on mobile"
        },


    ]
}