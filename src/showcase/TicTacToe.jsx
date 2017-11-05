import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Codepen from '../components/Codepen'

const TicTacToe = ({ label = '' }) => (
  <ProjectContainer
    header={label}
    url="https://github.com/dentemple/tic-tac-toe-with-react">
    <Codepen hash="GEZpoJ" title={label} />
  </ProjectContainer>
)

export default TicTacToe
