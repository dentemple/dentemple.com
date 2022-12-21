import { ComponentType, ReactNode } from 'react'

import usMessages from 'src/i18n/locales/enUS.json'

// For use with Styled Components
export interface BaseStyledComponent {
  as?: keyof JSX.IntrinsicElements | ComponentType // | string
}

export type Callback = <T>(t: T) => void

// For use with React-Intl
export type Chunks = ReactNode

// For use with React-Intl
export type IntlMessages = keyof typeof usMessages

// For use with React Router
export interface RouteError {
  message?: string
  statusText: string
}
