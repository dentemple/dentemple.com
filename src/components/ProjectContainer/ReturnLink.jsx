import React from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'
import { ListIcon } from '../icons'

const ReturnLink = () => (
  <Link to="/">
    <BottomNavigationItem label="Return to List" icon={ListIcon} />
  </Link>
)

export default ReturnLink
