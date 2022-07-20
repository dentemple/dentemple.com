import React, { ReactNode } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import GithubRibbon from './GithubRibbon'
import GlobalStyle from './GlobalStyle'

export interface LayoutProps {
  children?: ReactNode
}

export const LayoutQuery = graphql`
  query {
    site {
      siteMetadata {
        repo
      }
    }
  }
`

export default function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(LayoutQuery)

  const { repo } = data.site.siteMetadata

  return (
    <>
      <GlobalStyle theme="purple" />
      <GithubRibbon url={repo} />
      <main className="center">{children}</main>
    </>
  )
}
