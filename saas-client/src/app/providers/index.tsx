import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'

import themes, { Theme } from 'src/app/themes'
import { intlProps } from 'src/i18n'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const selectedTheme = themes.main as Theme

  return (
    <IntlProvider {...intlProps}>
      <ThemeProvider theme={selectedTheme}>
        <HelmetProvider>{children}</HelmetProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default Providers
