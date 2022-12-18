import { ComponentType } from 'react'

export interface BaseStyledComponent {
  as?: keyof JSX.IntrinsicElements | ComponentType // | string
}

export default BaseStyledComponent
