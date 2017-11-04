import React from 'react'
import Aux from 'react-aux'
import Divider from 'material-ui/Divider'

const Header = ({ header }) => (
  <Aux>
    <h2 style={{ textAlign: 'center' }}>{header}</h2>
    <Divider />
  </Aux>
)

export default Header
