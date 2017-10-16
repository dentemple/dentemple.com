import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../index'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})

it('matches the snapshot', () => {
  const component = shallow(<MyComponent />)
  expect(component).toMatchSnapshot()
})
