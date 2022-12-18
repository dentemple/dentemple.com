import { Helmet } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import Providers from 'src/app/providers'
import router from 'src/app/router'
import { GlobalStyle } from 'src/app/themes/GlobalStyle'

import { intl } from 'src/i18n'

export function App() {
  return (
    <Providers>
      <>
        <Helmet prioritizeSeoTags>
          <title>{intl.formatMessage({ id: 'app.title' })}</title>
        </Helmet>
        <GlobalStyle />
        <RouterProvider router={router} />
      </>
    </Providers>
  )
}

export default App
