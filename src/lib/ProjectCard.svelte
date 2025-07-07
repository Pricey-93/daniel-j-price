<script lang="ts">
  import type { Image, Source } from "../ts/types";
  import Github from "./Buttons/Github.svelte";
  import TechBadge from "./TechBadge.svelte";

  function openInNewTab(href: string): void {
    window.open(`${href}`, '_blank');
  }

  interface Props {
    image: Image,
    title: string,
    isLatest: boolean,
    description: string,
    technologies: string[],
    source: Source
  }

  const { image, title, description, technologies, source }: Props = $props();
</script>

<article class="card max-w-96 bg-base-100 shadow-sm">
  <figure>
    <img
      src={image.src}
      alt={image.alt} />
  </figure>
  <div class="card-body">
    <h3 class="card-title">
      {title}
    </h3>
    <p>{description}</p>
    <div class="card-actions">
      {#each technologies as tech}
        <TechBadge text={tech} />
	    {/each}
    </div>
    <div class="flex justify-between gap-2">
      {#if source.productionSiteUrl}
        <button type="button" class="btn btn-success" onclick={ () => openInNewTab(source.productionSiteUrl!) }>Live Site</button>
      {/if}
      <div class="self-center">
        <Github href={source.repositoryUrl} />
      </div>
    </div>
  </div>
</article>