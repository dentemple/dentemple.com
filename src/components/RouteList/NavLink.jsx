import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ url, children }) => (
  <p>
    <Link to={url}>{children}</Link>
  </p>
)

export default NavLink
