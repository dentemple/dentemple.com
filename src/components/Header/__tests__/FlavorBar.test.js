import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../FlavorBar'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
