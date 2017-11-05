import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Codepen from '../components/Codepen'

const WikipediaAPI = ({ label = '' }) => (
  <ProjectContainer
    header={label}
    url="https://github.com/dentemple/wikipedia-viewer">
    <Codepen hash="qqXLLz" title={label} />
  </ProjectContainer>
)

export default WikipediaAPI
