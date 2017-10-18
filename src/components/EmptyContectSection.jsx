import React from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInUp } from 'react-animations'
import Paper from 'material-ui/Paper'

const Animation = keyframes`${slideInUp}`
const StyledSection = styled.section`
  font-family: 'Exo', 'sans-serif';
  font-weight: 400;
  text-align: center;
  max-width: 900px;
  height: 300px;
  padding: 10px 30px;
  margin: 0 auto;

  & > * {
    animation: 0.8s ${Animation};
  }
`

const ContentSection = () => (
  <StyledSection>
    <Paper zDepth={2} style={{ padding: '5px 20px', height: '100%' }}>
      <p>
        <small>Loading ...</small>
      </p>
    </Paper>
  </StyledSection>
)

export default ContentSection
