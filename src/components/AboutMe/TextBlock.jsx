import React from 'react'
import styled from 'styled-components'

import SubHeading from './SubHeading'
import Skills from './Skills'

const StyledBlock = styled.div`
  align-self: flex-start;
  font-size: 0.9em;
  max-width: 60%;

  @media only screen and (max-width: 700px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 500px) {
    max-width: 95%;
    font-size: 0.7em;
  }
`

const StyledP = styled.p`
  color: #666666;
  margin: 0 10px 20px;
`

const TextBlock = ({ location, position, sinceDate, blurb, skills }) => (
  <StyledBlock>
    <SubHeading>
      {location} • {position} since {sinceDate}
    </SubHeading>
    <StyledP>{blurb}</StyledP>
    <SubHeading>Technical Skills</SubHeading>
    <Skills skills={skills} />
  </StyledBlock>
)

export default TextBlock
