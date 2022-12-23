import 'styled-components'
import { Theme } from 'src/app/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.webm' {
  const src: string
  export default src
}

declare module '*.vtt' {
  const src: string
  export default src
}
