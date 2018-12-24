/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Countdown | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Countdown from '../Countdown'

 describe('Countdown', () => {
   const wrapper = shallow(<Countdown/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('countdown')).toBe(true)
   })
 })
 