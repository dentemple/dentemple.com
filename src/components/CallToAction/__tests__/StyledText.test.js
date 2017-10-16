import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../StyledText'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
