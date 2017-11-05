import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Codepen from '../components/Codepen'

const QuoteGenerator = ({ label = '' }) => (
  <ProjectContainer
    header={label}
    url="https://github.com/dentemple/random-quote-generator">
    <Codepen hash="zoZOYo" title={label} />
  </ProjectContainer>
)

export default QuoteGenerator
