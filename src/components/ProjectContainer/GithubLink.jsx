import React from 'react'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'
import { GithubIcon } from '../icons'

const GithubLink = ({ url }) => (
  <a href={url}>
    <BottomNavigationItem label="View the Code" icon={GithubIcon} />
  </a>
)

export default GithubLink
