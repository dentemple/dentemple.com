import styled from 'styled-components'
import { BaseStyledComponent } from 'src/@types'

export interface PageProps extends BaseStyledComponent {}

export const Page = styled.main<PageProps>`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  height: 100%;
  min-height: 100vh;
`

export default Page
