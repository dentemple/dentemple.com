import React from 'react'
import Aux from 'react-aux'
import styled from 'styled-components'

import Header from './Header'
import ProjectNavigation from './ProjectNavigation'

const StyledArticle = styled.article`
  margin: 20px 10px;
`

const ProjectContainer = ({ url, header, children }) => (
  <Aux>
    <Header header={header} />
    <StyledArticle>{children}</StyledArticle>
    <ProjectNavigation url={url} />
  </Aux>
)

export default ProjectContainer
