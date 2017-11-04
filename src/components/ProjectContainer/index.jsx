import React from 'react'
import Aux from 'react-aux'
import ProjectNavigation from './ProjectNavigation'

const ProjectContainer = ({ githubUrl, children }) => (
  <Aux>
    {children}
    <ProjectNavigation githubUrl={githubUrl} />
  </Aux>
)

export default ProjectContainer
