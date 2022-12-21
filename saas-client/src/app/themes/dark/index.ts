import common from 'src/app/themes/common'

const specificColors = {
  // black
  black: '#000000',
  blackLight: '#1a1a1a',
  // white
  white: '#ffffff',
  whiteDark: '#f9f9f9',
  // blue
  blue: '#42a5f5',
  blueLight: '#80d6ff',
  blueDark: '#0077c2',
  // amber
  amber: '#ffca28',
  amberLight: '#fffd61',
  amberDark: '#c79a00',
}

export const colors = {
  ...specificColors,
  primary: specificColors.blue,
  primaryLight: specificColors.blueLight,
  primaryDark: specificColors.blueDark,
  secondary: specificColors.amber,
  secondaryLight: specificColors.amberLight,
  secondaryDark: specificColors.amberDark,
  background: specificColors.blackLight,
  surface: specificColors.blackLight,
  error: '#B00020',
  onPrimary: specificColors.white,
  onSecondary: specificColors.white,
  onBackground: specificColors.white,
  onSurface: specificColors.white,
  onError: specificColors.white,
  link: '#646cff',
  linkHover: '#535bf2',
}

export const dark = {
  ...common,
  colors,
}

export default dark
