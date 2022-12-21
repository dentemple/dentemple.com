import styled from 'styled-components'
import { BaseStyledComponent } from 'src/@types'

export interface CardProps extends BaseStyledComponent {}

export const Card = styled.div<CardProps>`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  position: relative;
  padding: 1rem;
`

export default Card
