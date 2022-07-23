import React from 'react'
import styled from 'styled-components'

export interface InlineListProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  as?: React.ElementType
  padding?: string
}

export const InlineList = styled.ul<InlineListProps>`
  display: inline;
  margin: 0;
  padding: 0;
  font-size: inherit;
  color: inherit;

  & > li {
    display: inline;
    font-size: inherit;
    color: inherit;
  }
`

export default InlineList
