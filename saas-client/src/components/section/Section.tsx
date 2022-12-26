import styled from 'styled-components'
import { BaseStyledComponent } from 'src/@types'

export interface SectionProps extends BaseStyledComponent {}

export const Section = styled.section<SectionProps>`
  /* display */
  display: flex;
  flex-direction: row;

  /* box */
  min-height: 600px;
`

export default Section
