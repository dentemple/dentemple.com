import { FormattedMessage } from 'react-intl'

import { HeroHeader } from 'src/features'
import { Card, FlatButton, Stack } from 'src/components'
import {
  Fieldset,
  Heading1,
  HeadingText,
  HeaderContent,
  HeaderContentItem,
  Legend,
} from './containers'

import { Chunks } from 'src/@types'

export function Header() {
  return (
    <HeroHeader data-testid='pages/home/header'>
      <HeaderContent>
        <HeaderContentItem>
          <Fieldset>
            <Legend>
              &nbsp;
              <FormattedMessage id='pages.home.header.legend' />
              &nbsp;
            </Legend>
            <Heading1>
              <FormattedMessage
                id='pages.home.header.heading1'
                values={{
                  small: formatSmallText,
                }}
              />
            </Heading1>
            <HeadingText>
              <FormattedMessage id='pages.home.header.text' />
            </HeadingText>
          </Fieldset>
        </HeaderContentItem>
        <HeaderContentItem>
          <FlatButton style={{ margin: '1.5em 0' }}>
            <FormattedMessage id='pages.home.header.button.contact'></FormattedMessage>
          </FlatButton>
          <FlatButton secondary>
            <FormattedMessage id='pages.home.header.button.demo' />
          </FlatButton>
        </HeaderContentItem>
      </HeaderContent>
    </HeroHeader>
  )

  function formatSmallText(chunks: Chunks) {
    return <small style={{ display: 'block' }}>{chunks}</small>
  }
}

export default Header
