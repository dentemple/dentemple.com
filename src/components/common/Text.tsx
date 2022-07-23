import React from 'react'
import styled from 'styled-components'

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  as?: React.ElementType
}

export const Text = styled.p<TextProps>`
  color: inherit;
`

export default Text
