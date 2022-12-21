import { FormattedMessage } from 'react-intl'

import { HeroHeader } from 'src/features'
import { Card } from 'src/components'
import { Fieldset, Heading1, HeadingText, HeaderContent, Legend } from './containers'

import { Chunks } from 'src/@types'

export function Header() {
  return (
    <HeroHeader data-testid='pages/home/header'>
      <HeaderContent>
        <Card>
          <Fieldset>
            <Legend>
              &nbsp;
              <FormattedMessage id='home.header.legend' />
              &nbsp;
            </Legend>
            <Heading1>
              <FormattedMessage
                id='home.header.heading1'
                values={{
                  small: formatSmallText,
                }}
              />
            </Heading1>
            <HeadingText>
              <FormattedMessage id='home.header.text' />
            </HeadingText>
          </Fieldset>
        </Card>
      </HeaderContent>
    </HeroHeader>
  )

  function formatSmallText(chunks: Chunks) {
    return <small style={{ display: 'block' }}>{chunks}</small>
  }
}

export default Header
