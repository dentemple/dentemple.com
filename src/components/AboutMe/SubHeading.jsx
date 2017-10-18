import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h3`
  font-family: 'Exo', sans-serif;
  text-align: left;
  font-weight: 400;
  margin: 10px 0;
  padding: 0;
`

const SubHeading = ({ children }) => <StyledHeading>{children}</StyledHeading>

export default SubHeading
