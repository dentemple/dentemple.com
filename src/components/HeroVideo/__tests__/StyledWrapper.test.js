import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../StyledWrapper'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
