import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../StyledSection'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
