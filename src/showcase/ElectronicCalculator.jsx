import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Codepen from '../components/Codepen'

const ElectronicCalculator = ({ label = '' }) => (
  <ProjectContainer
    header={label}
    url="https://github.com/dentemple/reactjs-electronic-calculator">
    <Codepen hash="NbZqmQ" title={label} />
  </ProjectContainer>
)

export default ElectronicCalculator
