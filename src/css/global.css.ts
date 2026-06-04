import { globalStyle } from '@vanilla-extract/css'

/* Override the default Infima variables here. */
globalStyle(':root', {
  vars: {
    '--ifm-color-primary': '#718792',
    '--ifm-color-primary-dark': '#1c313a',
    '--ifm-color-primary-darker': '#192c34',
    '--ifm-color-primary-darkest': '#111d23',
    '--ifm-color-primary-light': '#718792',
    '--ifm-color-primary-lighter': '#b8c3c9',
    '--ifm-color-primary-lightest': '#f1f3f4',
    '--ifm-code-font-size': '95%',
    '--docusaurus-highlighted-code-line-bg': 'rgba(0, 0, 0, 0.1)',
  },
})

/*
COMPLEMENTARY COLORS (LIGHT)

secondary: #b3703f
secondary-dark: #804415
secondary-light: #e89f6b
*/

/* For readability concerns, you should choose a lighter palette in dark mode. */
globalStyle('[data-theme="dark"]', {
  vars: {
    '--ifm-color-primary': '#b0bec5',
    '--ifm-color-primary-dark': '#808e95',
    '--ifm-color-primary-darker': '#808e95',
    '--ifm-color-primary-darkest': '#1a8870',
    '--ifm-color-primary-light': '#e2f1f8',
    '--ifm-color-primary-lighter': '#b8c3c9',
    '--ifm-color-primary-lightest': '#f1f3f4',
    '--docusaurus-highlighted-code-line-bg': 'rgba(0, 0, 0, 0.3)',
  },
})

/*
COMPLEMENTARY COLORS (DARK)

secondary: #E5BB9C
secondary-dark: #804415
secondary-light: #e89f6b
*/

globalStyle('.linkedin', {
  backgroundColor: '#0077b5',
  color: '#fff',
})

globalStyle('.button.button--secondary.linkedin', {
  color: '#fff',
})

globalStyle('.padding-spacer--bottom', {
  paddingBottom: '2rem',
})
