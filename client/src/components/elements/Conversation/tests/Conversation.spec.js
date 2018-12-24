/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Conversation | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Conversation from '../Conversation'

describe('Conversation', () => {
  const wrapper = shallow(<Conversation />)

  it('renders a component', () => {
    expect(wrapper.hasClass('conversation')).toBe(true)
  })
})
