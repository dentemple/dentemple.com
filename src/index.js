import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import 'typeface-exo'
import 'typeface-roboto'

import App from './page/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './util/registerServiceWorker'

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
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
