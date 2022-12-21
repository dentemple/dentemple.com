import 'styled-components'
import { Theme } from 'src/app/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
