import React from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInRight } from 'react-animations'
import AppBar from 'material-ui/AppBar'

const Animation = keyframes`${slideInRight}`
const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  top: 0;
  & > * {
    animation: 1s ${Animation};
  }
`

const NavBar = () => (
  <StyledContainer>
    <AppBar title="Home" style={{ top: 0 }} />
  </StyledContainer>
)

export default NavBar
