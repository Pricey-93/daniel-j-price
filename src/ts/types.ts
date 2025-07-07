export interface Project {
  image: Image,
  title: string,
  isLatest: boolean,
  description: string,
  technologies: string[],
  source: Source,
}
export interface Image {
  src: string,
  alt: string,
}

export interface Source {
  productionSiteUrl?: string,
  repositoryUrl: string
}