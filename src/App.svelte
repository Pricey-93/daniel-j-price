<script lang="ts">
  import ProjectCard from "./lib/ProjectCard.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import type { Project } from "./ts/types";
  import { onMount } from 'svelte';

  let projects: Project[];

  onMount(async () => {
    const response = await fetch("data.json");
    if (response.ok) {
      projects = await response.json();
      console.log(projects);
    } else {
      console.error('Failed to load data.json');
    }
  });

  function scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<main id="main-container" class="flex flex-col gap-8 container p-4 mx-auto">
  <section id="intro" class="py-8">

    <div class="avatar block mx-auto mb-4">
      <div class="w-50 md:w-75 lg:w-100 rounded-full mx-auto">
        <img 
          src="assets/images/me-in-cotswolds.jpg"
          alt="Me sat on a wall in the cotswolds with a river behind me and a scenic background."
        />
      </div>
    </div>

    <div class="flex flex-col gap-2 text-center">
      <h1 class="text-primary text-4xl lg:text-6xl">Daniel Price</h1>
      <p class="text-base-content/50 lg:text-2xl">Software Developer</p>
      <button type="button" class="btn btn-primary btn-outline w-50 mx-auto" onclick={scrollToProjects}>
        see my projects
      </button>
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
      {#if projects}
        {#each projects as project}
          <ProjectCard
          image={project.image}
          title={project.title} 
          isLatest={project.isLatest} 
          description={project.description} 
          technologies={project.technologies}
          source={project.source}
          />
        {/each}
      {/if}
    </div>
  </section>
</main>