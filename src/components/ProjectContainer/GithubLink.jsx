import React from 'react'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'
import { GithubIcon } from '../Icons'

const GithubLink = ({ githubUrl }) => (
  <a href={githubUrl}>
    <BottomNavigationItem label="View the Code" icon={GithubIcon} />
  </a>
)

export default GithubLink
