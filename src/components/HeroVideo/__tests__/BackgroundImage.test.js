import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../BackgroundImage'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
