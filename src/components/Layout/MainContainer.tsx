import React from 'react'
import styled from 'styled-components'

import { Box, BoxProps } from '../common'

export interface MainContainerProps extends BoxProps {}

export const StyledBox = styled(Box)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 10px 21.8px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 10px;
`

export default function MainContainer({ children, ...rest }: MainContainerProps) {
  return (
    <StyledBox as="main" {...rest}>
      {children}
    </StyledBox>
  )
}
