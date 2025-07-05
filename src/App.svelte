<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import ProjectCard from "./lib/ProjectCard.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import type { Project } from "./ts/types";

  const projects: Project[] = [{
    image: {
      src: "assets/images/country-finder-screenshot.png",
      alt: "Shoes",
    },
    title: "Country-Finder",
    isLatest: true,
    description: "Country finder is an application that interacts with the free Countries API and allows the user to search for, and view, a socio-economic and geo-political overview of any country.",
    technologies: ["TypeScript", "React", "React-Router"]
  },
  {
    image: {
      src: "assets/images/rest-api.png",
      alt: "Shoes",
    },
    title: "Film API",
    isLatest: false,
    description: "API project built using .NET API controllers. It allows you to do crud actions on films and limits your access based on your JWT claims which much first be retrieved from the identity endpoint. '/token'",
    technologies: ["C#", ".NET", "Dapper", "Docker"]
  },
    {
    image: {
      src: "assets/images/portfolio-screenshot.png",
      alt: "a screenshot of the portfolio page",
    },
    title: "Personal Portfolio",
    isLatest: false,
    description: "The page you're currently looking at !",
    technologies: ["TypeScript", "Svelte", "Tailwind CSS", "DaisyUI"]
  },
  {
    image: {
      src: "assets/images/coming-soon.png",
      alt: "Shoes",
    },
    title: "Blog Site",
    isLatest: false,
    description: "This is a full-stack project that I am currently working on and will be a personal blog site once completed. I intend to use this to document things I learn and observe in software development but also in day to day life.",
    technologies: ["Vue", "PHP", "Laravel"]
  }];
</script>

<!-- <Header /> -->
<main id="main-container" class="flex flex-col gap-8 container p-4 mx-auto">
  <section id="intro" class="hero lg:min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">

      <div class="avatar">
        <div class="w-50 md:w-75 lg:w-100 rounded-full">
          <img 
            src="assets/images/ghibli-transformed-1751409174082.png"
            alt="ai generated studio ghibli version of me taking a break in the cotswolds with a picturesque view in the background"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2 text-center">
        <h1 class="text-primary text-4xl lg:text-6xl">Daniel Price</h1>
        <p class="text-base-content/50 lg:text-2xl">Software Developer</p>
        <button type="button" class="btn btn-primary btn-outline">
          Contact Me
        </button>
      </div>
      
    </div>
  </section>

  <section id="about">
      <div class="divider">
        <h2 class="text-primary text-3xl text-center lg:text-5xl">About</h2>
      </div>

      <div class="py-8 md:p-8 flex flex-col gap-4">
        <p>
          Hi<span aria-hidden="true">👋</span>, 
          I'm Dan. I'm a Software Developer who has worked professionally in a full-stack .NET environment,
          as well as the node.js environment, collaborating with clients and building and maintaining solutions from backend
          to frontend with clean, maintainable code. Owing to my unique background, I have become exceptional at solving 
          real world problems and have transformed into an adaptable team player, 
          with an eye for detail and a strong understanding of software development best practices.
        </p>
        <p>
          My Journey started in the British Army where I served 7 years as a regular soldier, 
          building my character and developing important qualities like discipline, attention to detail,
          and organisational skills.
          After leaving, I levelled up further by gaining a first class degree in Computer Science and Japanese Studies
          from Oxford Brookes University before successfully landing a place as an English Teacher on the Japan Exchange and
          Teaching Programme (JET).
          Finally, I came back home to the UK to begin my career as Software Developer.
        </p>
        <ul>
          When I'm not writing code or researching technologies I like to:
          <li class="list-disc list-inside">
            continue my study of Japanese 🇯🇵📚
          </li>
          <li class="list-disc list-inside">
            focus on my fitness goals 💪
          </li>
          <li class="list-disc list-inside">
            Attend music festivals in Europe with my mates 🎸🍺
          </li>
        </ul>
      </div>
  </section>

  <section id="experience">
    <div class="divider">
      <h2 class="text-primary text-3xl text-center lg:text-5xl">Experience</h2>
    </div>

    <div class="py-8 md:p-8">
      <Timeline />
    </div>
  </section>

  <section id="projects">
    <div class="divider">
      <h2 class="text-primary text-3xl text-center lg:text-5xl">Projects</h2>
    </div>
    <div class="py-8 md:p-8 flex flex-row flex-wrap justify-center gap-4">
      {#each projects as project}
        <ProjectCard
        image={project.image}
        title={project.title} 
        isLatest={project.isLatest} 
        description={project.description} 
        technologies={project.technologies}
        />
      {/each}
    </div>
  </section>

  <section id="contact">
    <h2 class="text-primary text-3xl text-center lg:text-5xl">Contact</h2>
    <form> 
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Your Message</legend>
        <textarea class="textarea h-24 w-full" placeholder="Hey my name's X, I'd like to talk to you about Y..."></textarea>
        <button class="btn btn-primary btn-outline" type="submit">Send</button>
      </fieldset>
    </form> 
  </section>
</main>
<Footer />