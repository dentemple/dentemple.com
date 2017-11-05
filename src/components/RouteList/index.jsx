import React from 'react'
import Aux from 'react-aux'
import NavLink from './NavLink'

const RouteList = ({ showcase }) => (
  <nav>
    <h2 style={{ textAlign: 'center' }}>Showcase</h2>
    <UnpackRoutes routes={showcase} />
  </nav>
)

const UnpackRoutes = ({ routes }) => (
  <Aux>
    {routes.map((route, key) => (
      <NavLink key={key} url={route.url}>
        {route.label}
      </NavLink>
    ))}
  </Aux>
)

export default RouteList
