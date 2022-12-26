/// <reference types="react-scripts" />

import 'styled-components'
import { Theme } from 'src/app/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '*.jpg'
declare module '*.png'

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
