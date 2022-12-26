import common from 'src/app/themes/common'

const specificColors = {
  // black
  black: '#000000',
  blackLight: '#1a1a1a',
  // white
  white: '#ffffff',
  whiteDark: '#f9f9f9',
  // blue
  blue: '#1976d2',
  blueLight: '#63a4ff',
  blueDark: '#004ba0',
  // yellow
  yellow: '#ffee58',
  yellowLight: '#ffff8b',
  yellowDark: '#c9bc1f',
}

export const colors = {
  ...specificColors,
  primary: specificColors.blue,
  primaryLight: specificColors.blueLight,
  primaryDark: specificColors.blueDark,
  secondary: specificColors.yellow,
  secondaryLight: specificColors.yellowLight,
  secondaryDark: specificColors.yellowDark,
  background: specificColors.blackLight,
  surface: specificColors.blackLight,
  error: '#B00020',
  onPrimary: specificColors.white,
  onSecondary: specificColors.black,
  onBackground: specificColors.white,
  onSurface: specificColors.white,
  onError: specificColors.white,
  link: '#646cff',
  linkHover: '#535bf2',
}

export const main = {
  ...common,
  colors,
}

export default main
