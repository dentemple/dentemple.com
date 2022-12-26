import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import { main } from 'src/app/themes'

type uiProps = React.ReactElement<any, string | React.JSXElementConstructor<any>>
type optionsProps = any

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={main}>
      <HelmetProvider>{children}</HelmetProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: uiProps, options: optionsProps) => {
  return render(ui, { wrapper: Providers, ...options })
}

// re-export everything so that importing these custom utils is the same as
//  importing from @testing-library/react
export * from '@testing-library/react'

// override render method
export { customRender as render }
