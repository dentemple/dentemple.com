import React from 'react'
import { BottomNavigation } from 'material-ui/BottomNavigation'
import ReturnLink from './ReturnLink'
import GithubLink from './GithubLink'

const ProjectNavigation = ({ githubUrl }) => (
  <BottomNavigation style={{ fontSize: '1.9em', margin: 10 }}>
    <GithubLink githubUrl="https://www.github.com" />
    <ReturnLink />
  </BottomNavigation>
)

export default ProjectNavigation
