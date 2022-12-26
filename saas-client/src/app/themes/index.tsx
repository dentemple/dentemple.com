import main from 'src/app/themes/main'
import alt from 'src/app/themes/alt'

export { main, alt }

export type Theme = typeof main

export const themes = {
  main,
  alt,
}

export default themes
