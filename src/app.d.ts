/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

declare module '*.jpg?webp' {
  const src: string;
  export default src;
}

declare module '*.jpg?webp&w=1920' {
  const src: string;
  export default src;
}

declare module '*.jpg?webp&w=1280' {
  const src: string;
  export default src;
}

declare module '*.jpg?webp&w=960' {
  const src: string;
  export default src;
}

declare module '*.jpg?webp&w=640' {
  const src: string;
  export default src;
}

declare module '*.png?webp' {
  const src: string;
  export default src;
}

declare module '*.png?webp&w=1920' {
  const src: string;
  export default src;
}

declare module '*.png?webp&w=1280' {
  const src: string;
  export default src;
}

declare module '*.png?webp&w=960' {
  const src: string;
  export default src;
}

declare module '*.png?webp&w=640' {
  const src: string;
  export default src;
}
