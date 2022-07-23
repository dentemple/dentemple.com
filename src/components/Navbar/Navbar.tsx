import React from 'react'
import styled from 'styled-components'

import { Box, BoxProps, ExternalLink, InlineList, Link, Text, TextProps } from '../common'

export interface NavbarProps extends BoxProps {
  selfName: string
  selfLocation: string
  selfTitle: string
  githubUrl: string
  linkedinUrl: string
  twitterUrl: string
}

export interface StyledTextProps extends TextProps {}

export const StyledBox = styled(Box)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 5px 10px 10px;
`

export const Heading = styled(Text)<StyledTextProps>`
  display: inline-block;
  font-size: 11px;
  font-weight: normal;

  @media (min-width: 800px) {
    font-size: 14px;
  }

  & > span {
    cursor: default;
  }
`

export const StyledList = styled(InlineList)`
  & > li {
    font-size: 11px;
    padding: 0 5px;

    @media (min-width: 800px) {
      font-size: 14px;
    }
  }
`

export default function Navbar({
  selfName,
  selfLocation,
  selfTitle,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}: NavbarProps) {
  return (
    <StyledBox as="nav">
      <Heading as="h1">
        <Link to="/">{selfName}</Link>
        <span> | </span>
        <span>{selfTitle}</span>
        <span> near </span>
        <span>{selfLocation}</span>
      </Heading>
      <StyledList>
        <span style={{ cursor: 'default' }}>&gt;</span>
        <li>
          <ExternalLink href={githubUrl}>Github</ExternalLink>
        </li>
        <li>
          <ExternalLink href={linkedinUrl}>LinkedIn</ExternalLink>
        </li>
        <li>
          <ExternalLink href={twitterUrl}>Twitter</ExternalLink>
        </li>
      </StyledList>
    </StyledBox>
  )
}
