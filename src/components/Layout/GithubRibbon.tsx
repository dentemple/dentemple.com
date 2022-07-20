import React from 'react'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'

export interface GithubRibbonProps {
  url: string
}

export default function GithubRibbon({ url }: GithubRibbonProps) {
  return (
    <a
      className="github-fork-ribbon"
      href={url}
      data-ribbon="View me on GitHub"
      title="View me on GitHub"
    >
      View me on GitHub
    </a>
  )
}
