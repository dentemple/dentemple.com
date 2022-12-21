import { Helmet } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import styled from 'styled-components'

import Providers from 'src/app/providers'
import router from 'src/app/router'
import { GlobalStyle } from 'src/app/themes/GlobalStyle'

import { intl } from 'src/i18n'

const NavBar = styled.nav`
  /* display */
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primaryDark};

  /* box */
  height: ${({ theme }) => theme.sizes.navbarHeight}px;
`

export function App() {
  return (
    <Providers>
      <>
        <Helmet prioritizeSeoTags>
          <title>{intl.formatMessage({ id: 'app.title' })}</title>
        </Helmet>
        <GlobalStyle />
        {/* <NavBar>
          <p>Nav Items</p>
        </NavBar> */}
        <RouterProvider router={router} />
      </>
    </Providers>
  )
}

export default App
