/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Bubble | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Bubble from '../Bubble'

 describe('Bubble', () => {
   const wrapper = shallow(<Bubble/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('bubble')).toBe(true)
   })
 })
 