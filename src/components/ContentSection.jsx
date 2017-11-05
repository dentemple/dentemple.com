import React from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import AnimateContents from './AnimateContents'

const StyledSection = styled.section`
  max-width: 900px;
  padding: 10px 30px;
  margin: 30px auto;
`

const ContentSection = ({ heading, id, children }) => (
  <StyledSection id={id}>
    <AnimateContents>
      <Paper zDepth={1} style={{ padding: '5px 20px 20px' }}>
        {children}
      </Paper>
    </AnimateContents>
  </StyledSection>
)

export default ContentSection
