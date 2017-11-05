import React from 'react'
import Aux from 'react-aux'
import { BottomNavigation } from 'material-ui/BottomNavigation'
import Divider from 'material-ui/Divider'

import ReturnLink from './ReturnLink'
import GithubLink from './GithubLink'

const ProjectNavigation = ({ url }) => (
  <Aux>
    <Divider />
    <BottomNavigation style={{ fontSize: '1.9em', margin: 10 }}>
      <GithubLink url={url} />
      <ReturnLink />
    </BottomNavigation>
  </Aux>
)

export default ProjectNavigation
