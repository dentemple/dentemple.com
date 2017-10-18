import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInRight } from 'react-animations'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItems from './MenuItems'

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

class NavBar extends Component {
  constructor() {
    super()
    this.state = { open: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <StyledContainer>
        <AppBar
          title=""
          style={{ top: 0 }}
          onLeftIconButtonTouchTap={this.handleClick}
        />
        <Drawer open={this.state.open} openSecondary={true} width={150}>
          <MenuItems />
        </Drawer>
      </StyledContainer>
    )
  }
}

export default NavBar
