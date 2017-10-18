import React from 'react'
import Aux from 'react-aux'
import MenuItem from 'material-ui/MenuItem'

const MenuItems = () => (
  <Aux>
    <MenuItem>
      <a href="#home">Home</a>
    </MenuItem>
    <MenuItem>
      <a href="#about">About</a>
    </MenuItem>
    <MenuItem>
      <a href="#projects">Projects</a>
    </MenuItem>
    <MenuItem>
      <a href="#contact">Contact</a>
    </MenuItem>
  </Aux>
)

export default MenuItems
