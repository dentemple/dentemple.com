import React from 'react'
import { createGlobalStyle } from 'styled-components'

import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #828282;
  }
  .center {
    text-align: center;
    text-align: -webkit-center;
  }
`

export default GlobalStyle
