import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import 'typeface-exo'
import 'typeface-roboto'

import App from './page/App'
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
  }
`

render(<App />, document.getElementById('root'))
registerServiceWorker()
