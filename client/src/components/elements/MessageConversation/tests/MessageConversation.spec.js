/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * MessageConversation | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import MessageConversation from '../MessageConversation'

describe('MessageConversation', () => {
  const wrapper = shallow(<MessageConversation />)

  it('renders a component', () => {
    expect(wrapper.hasClass('messageconversation')).toBe(true)
  })
})
