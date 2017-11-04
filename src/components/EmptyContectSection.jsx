import React from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInUp } from 'react-animations'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

const Animation = keyframes`${slideInUp}`
const StyledSection = styled.section`
  font-family: 'Exo', 'sans-serif';
  font-weight: 400;
  text-align: center;
  max-width: 1000px;
  height: 300px;
  padding: 10px 30px;
  margin: 30px auto;

  & > * {
    animation: 0.8s ${Animation};
  }
`

const ContentSection = () => (
  <StyledSection>
    <Paper zDepth={1} style={{ padding: '5px 20px', height: '100%' }}>
      <CircularProgress />
    </Paper>
  </StyledSection>
)

export default ContentSection
