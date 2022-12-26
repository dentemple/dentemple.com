import styled from 'styled-components'
import { BaseStyledComponent } from 'src/@types'

export interface StackProps extends BaseStyledComponent {}

export const Stack = styled.div<StackProps>`
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* box */
  position: relative;
  height: 100%;
  padding: 1rem;
`

export default Stack
