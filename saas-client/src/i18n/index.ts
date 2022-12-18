import { createIntl, createIntlCache } from 'react-intl'

import LOCALES from './locales'
import enUD from './locales/enUD.json'
import enUS from './locales/enUS.json'

export const cache = createIntlCache()

export const messages = {
  [LOCALES.ENGLISH]: enUS,
  [LOCALES.ENGLISH_US]: enUS,
  [LOCALES.ENGLISH_UD]: enUD,
}

// get browser language
const browserLanguage = navigator.language

export const defaultLocale = 'en-US'
export const locale = process.env.REACT_APP_SET_LANGUAGE || browserLanguage

export const intlProps = {
  defaultLocale: LOCALES.ENGLISH,
  locale,
  messages: messages[locale],
}

// ONLY for use outside of the React lifecycle
export const intl = createIntl(intlProps, cache)

export default intlProps
