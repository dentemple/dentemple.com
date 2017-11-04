import React from 'react'
import Aux from 'react-aux'
import styled from 'styled-components'

import Header from './Header'
import ProjectNavigation from './ProjectNavigation'

const StyledArticle = styled.article`
  margin: 50px;
  border-radius: 10%;
`

const ProjectContainer = ({ githubUrl, header, children }) => (
  <Aux>
    <Header header={header} />
    <StyledArticle>{children}</StyledArticle>
    <ProjectNavigation githubUrl={githubUrl} />
  </Aux>
)

export default ProjectContainer
