export interface Project {
  image: Image,
  title: string,
  isLatest: boolean,
  description: string,
  technologies: string[]
}
export interface Image {
  src: string,
  alt: string,
}