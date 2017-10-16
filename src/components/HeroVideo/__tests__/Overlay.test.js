import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Overlay'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
