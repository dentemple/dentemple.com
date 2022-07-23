import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import styled from 'styled-components'

export interface LinkProps extends GatsbyLinkProps {}

export const Link = styled(GatsbyLink)<LinkProps>`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: underline;
  }
`

export default Link
