import React from 'react'
import { shallow } from 'enzyme'
import { Twitter } from '../index'

it('renders without crashing', () => {
  shallow(<Twitter />)
})
