import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Paper from 'material-ui/Paper'

const Animation = keyframes`${fadeIn}`
const StyledSection = styled.section`
  max-width: 1000px;
  padding: 10px 30px;
  margin: 30px auto;

  & > * {
    animation: 0.5s ${Animation};
  }
`

const ContentSection = ({ heading, id, children }) => (
  <StyledSection id={id}>
    <Paper zDepth={1} style={{ padding: '5px 20px' }}>
      {children}
    </Paper>
  </StyledSection>
)

export default ContentSection
