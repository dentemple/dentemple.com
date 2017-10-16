import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../BackgroundVideo'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
