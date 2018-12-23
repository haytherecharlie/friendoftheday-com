/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Input | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Input from '../Input'

 describe('Input', () => {
   const wrapper = shallow(<Input/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('input')).toBe(true)
   })
 })
 