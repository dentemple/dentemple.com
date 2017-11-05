import React from 'react'
import Aux from 'react-aux'
import Divider from 'material-ui/Divider'

const Header = ({ header }) => (
  <Aux>
    <h3 style={{ textAlign: 'center' }}>{header}</h3>
    <Divider />
  </Aux>
)

export default Header
