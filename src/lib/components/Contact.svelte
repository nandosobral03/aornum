<script lang='ts'>

</script>

<section>
    <h1>
        Contact
    </h1>
    <div>
        <button on:click={() => location.href="mailto:nandosobral03@gmail.com"}>
            Get in touch
            <i class="fa fa-envelope"></i>
        </button>
        <button on:click={() => location.href="https://www.linkedin.com/in/fernando-sobral-2b100621b/"}>
            LinkedIn
            <i class="fa fa-linkedin"></i>
        </button>  
        <button on:click={() => location.href="https://www.github.com/nandosobral03"}>
            GitHub
            <i class="fa fa-github"></i>
        </button>
    </div>
    <div>
    </div>
</section>

<style lang='scss'>
    section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        button{
            appearance: none;
            outline: none;
            color: var(--accent);
            text-decoration: none;
            background-color: var(--background);
            margin: 0;
            width: clamp(200px, 20%, 400px);
            aspect-ratio: 2/1;
            font-size: 1.5rem;
            font-family: 'Nunito Sans', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 2px solid var(--primary);
            padding: 1rem;
            background-color: var(--background);
            box-shadow: 5px 5px 0 0 var(--accent);
            &:hover{
                background-color: var(--primary);
                color: var(--background);
                cursor: pointer;
            }
           
        }
        div{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 20px;
            @media (max-width: 768px){
                width: 100%;
                flex-direction: column;
            }
        }
    }
</style>

