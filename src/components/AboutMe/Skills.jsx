import React from 'react'
import styled from 'styled-components'
import Chip from 'material-ui/Chip'

const StyledContainer = styled.div`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
`

const Skills = ({ skills }) => (
  <StyledContainer>
    {skills.map((skill, key) => <Skill key={key} skill={skill} />)}
  </StyledContainer>
)

const Skill = ({ skill }) => (
  <Chip backgroundColor="#d8e9f3" style={{ margin: 2 }}>
    {skill}
  </Chip>
)

export default Skills
