import styled from 'styled-components'

import { BaseStyledComponent } from 'src/types'

export const Header = styled.header<BaseStyledComponent>`
  background-color: ${({ theme }) => theme.main.colors.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.main.colors.white};
`
