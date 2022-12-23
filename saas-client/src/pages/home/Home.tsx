import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'

import { Page } from 'src/components'
import { Header } from './Header'
import { Section } from './containers'

export function Home() {
  const intl = useIntl()

  return (
    <Page data-testid='pages/home'>
      <Helmet>
        <title>{intl.formatMessage({ id: 'pages.home.title' })}</title>
      </Helmet>
      <Header />
      <Section>
        <div>For Business Owners</div>
        <div>For End Users</div>
        <div>For Software Engineers</div>
      </Section>
      <Section>
        <div>
          <h2>We help organizations make lorem ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Section>
      <Section>
        <div>10+ years software experience</div>
        <div>Contributions to 1000+ apps & websites</div>
        <div>Dozens of cutting-edge technologies</div>
      </Section>
      <Section>
        <h2>Explore the Platform</h2>
        <p>Features include</p>
      </Section>
      <Section>
        <h2>Contact Today</h2>
        <button>LinkedIn</button>
      </Section>
    </Page>
  )
}

export default Home
