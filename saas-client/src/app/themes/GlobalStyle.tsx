import 'normalize.css'
import { createGlobalStyle } from 'styled-components'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Nanum Myeongjo'],
  },
})

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  min-width: 320px;
  background-color: ${({ theme }) => theme.colors.blackLight};
  font-size: 18px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  /* box */
  margin: 0;

  /* typography */
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  line-height: 1.4;
}

body, #root {
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  height: 100%;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.secondary};
}


code {
  font-family: ${({ theme }) => theme.fonts.monospace};
}
`

export default GlobalStyle
