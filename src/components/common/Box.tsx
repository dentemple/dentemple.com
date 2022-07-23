import React from 'react'
import styled from 'styled-components'

export interface BoxProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  as?: React.ElementType
}

export const Box = styled.div<BoxProps>`
  display: flex;
  width: 100%;
`

export default Box
