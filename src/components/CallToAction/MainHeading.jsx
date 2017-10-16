import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: 1.7em;
  margin: 0;
  font-family: 'Exo', 'sans-serif';
  font-weight: 500;
`

const MainHeading = () => (
  <StyledHeading>
    {`{`}&nbsp;Den Temple&nbsp;{`}`}
  </StyledHeading>
)

export default MainHeading
