import common from 'src/app/themes/common'

const specificColors = {
  // black
  black: '#000000',
  blackLight: '#1a1a1a',
  // white
  white: '#ffffff',
  whiteDark: '#f9f9f9',
}

export const colors = {
  ...specificColors,
  primary: '',
  primaryLight: '',
  primaryDark: '',
  secondary: '',
  secondaryLight: '',
  secondaryDark: '',
  background: specificColors.white,
  surface: specificColors.white,
  error: '#B00020',
  onPrimary: specificColors.black,
  onSecondary: specificColors.black,
  onBackground: specificColors.black,
  onSurface: specificColors.black,
  onError: specificColors.black,
  link: '#646cff',
  linkHover: '#535bf2',
}

export const alt = {
  ...common,
  colors,
}

export default alt
