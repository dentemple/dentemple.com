import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Subheading'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
