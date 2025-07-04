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
    description: "test",
    technologies: ["React", "React-Router"]
  },
  {
    image: {
      src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "Shoes",
    },
    title: "Film API",
    isLatest: false,
    description: "test",
    technologies: ["C#", ".NET", "Dapper", "Docker"]
  },
  {
    image: {
      src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "Shoes",
    },
    title: "My-Project",
    isLatest: false,
    description: "another really cool project",
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

      <div class="py-8 md:p-8">
        <p>
          Hi<span aria-hidden="true">👋</span>. 
          I'm Dan, a Software Developer based in the UK with an educational background in <strong>Computer Science and Japanese</strong>.
        </p>
        <p>
          I’ve worked professionally in a <strong>full-stack .NET environment</strong>,
          building and maintaining solutions from backend to frontend with clean, maintainable code.
        </p>
        <p>
          If you'd like to work with me I'd love to hear from you!
        </p>
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