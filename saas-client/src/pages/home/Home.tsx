import { Helmet } from 'react-helmet-async'
import { FormattedMessage, useIntl } from 'react-intl'

import { ExternalLink, Page, Text } from 'src/components'

import { Header } from './containers'

export function Home() {
  const intl = useIntl()

  return (
    <Page data-testid='pages/home'>
      <Helmet>
        <title>{intl.formatMessage({ id: 'home.title' })}</title>
      </Helmet>
      <Header>
        <Text as='h1'>
          <FormattedMessage id='home.heading1' />
        </Text>
        <Text>
          <FormattedMessage
            id='home.text'
            values={{
              code: (chunks) => <code>{chunks}</code>,
            }}
          />
        </Text>
        <ExternalLink href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          <FormattedMessage id='home.link' />
        </ExternalLink>
      </Header>
    </Page>
  )
}

export default Home
