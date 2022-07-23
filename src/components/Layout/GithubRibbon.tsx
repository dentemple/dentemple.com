import React from 'react'
import { ExternalLink } from '../common'

export interface GithubRibbonProps {
  url: string
}

export default function GithubRibbon({ url }: GithubRibbonProps) {
  return (
    <ExternalLink
      className="github-fork-ribbon"
      href={url}
      data-ribbon="View me on GitHub"
      title="View me on GitHub"
    >
      View me on GitHub
    </ExternalLink>
  )
}
