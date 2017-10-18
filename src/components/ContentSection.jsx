import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Paper from 'material-ui/Paper'

const Animation = keyframes`${fadeIn}`
const StyledSection = styled.section`
  max-width: 900px;
  padding: 10px 30px;
  margin: 0 auto;

  & > * {
    animation: 0.5s ${Animation};
  }
`

const ContentSection = ({ heading, id, children }) => (
  <StyledSection id={id}>
    <Paper zDepth={2} style={{ padding: '5px 20px' }}>
      <h2 style={{ textAlign: 'center' }}>{heading}</h2>
      {children}
    </Paper>
  </StyledSection>
)

export default ContentSection
