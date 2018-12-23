/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * MessageInput | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import MessageInput from '../MessageInput'

 describe('MessageInput', () => {
   const wrapper = shallow(<MessageInput/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('messageinput')).toBe(true)
   })
 })
 