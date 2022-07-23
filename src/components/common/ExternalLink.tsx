import React from 'react'
import styled from 'styled-components'

export interface ExternalLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const ExternalLink = styled.a<ExternalLinkProps>`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: underline;
  }
`

export default ExternalLink
