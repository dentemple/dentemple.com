import React from 'react'
import { createGlobalStyle } from 'styled-components'

import 'normalize.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  #gatsby-focus-wrapper {
    align-items: center;
    padding: 8px 8px 0 8px;
  }

  body, p, h1, h2, h3, h4, h5, h6 {
    font-size: 14px;
  }
`

export default GlobalStyle
