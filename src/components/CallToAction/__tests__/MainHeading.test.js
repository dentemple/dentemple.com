import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../MainHeading'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
