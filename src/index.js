import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import 'typeface-exo'
import 'typeface-roboto'

import App from './page/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  *, *:before, *:after {
      box-sizing: inherit;
    }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.2em;
    background-color: #fefefe;
  }
`

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
