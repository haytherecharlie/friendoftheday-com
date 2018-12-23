/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Swiper | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Swiper from '../Swiper'

 describe('Swiper', () => {
   const wrapper = shallow(<Swiper/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('swiper')).toBe(true)
   })
 })
 