import React from 'react'
import { shallow } from 'enzyme'
import { Medium } from '../index'

it('renders without crashing', () => {
  shallow(<Medium />)
})
