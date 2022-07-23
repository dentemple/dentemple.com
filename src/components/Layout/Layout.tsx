import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import { Box } from '../common'

import GlobalStyle from './GlobalStyle'
import MainContainer from './MainContainer'
import Navbar from '../Navbar/Navbar'

import theme from './theme'

export interface LayoutProps {
  children: React.ReactNode
}

export const ContentContainer = styled(Box)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 85%;
  min-width: 275px;
  max-width: 1215px;
`

export const LayoutQuery = graphql`
  query {
    site {
      siteMetadata {
        selfName
        selfLocation
        selfTitle
        githubUrl
        linkedinUrl
        twitterUrl
      }
    }
  }
`

export default function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(LayoutQuery)
  const { ...rest } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentContainer>
        <Navbar {...rest} />
        <MainContainer>{children}</MainContainer>
      </ContentContainer>
    </ThemeProvider>
  )
}
