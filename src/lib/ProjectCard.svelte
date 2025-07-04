<script lang="ts">
  import type { Image } from "../ts/types";
  import TechBadge from "./TechBadge.svelte";

  interface Props {
    image: Image,
    title: string,
    isLatest: boolean,
    description: string,
    technologies: string[]
  }

  const { image, title, isLatest, description, technologies }: Props = $props();
</script>

<article class="card bg-base-100 max-w-96 shadow-sm">
  <figure>
    <img
      src={image.src}
      alt={image.alt} />
  </figure>
  <div class="card-body">
    <h3 class="card-title">
      {title}
      {#if isLatest}
      <div class="badge badge-secondary">LATEST</div>
      {/if}
    </h3>
    <p>{description}</p>
    <div class="card-actions justify-end">
      {#each technologies as tech}
        <TechBadge text={tech} />
	    {/each}
    </div>
  </div>
</article>