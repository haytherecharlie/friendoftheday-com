/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Picture | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Picture from '../Picture'

 describe('Picture', () => {
   const wrapper = shallow(<Picture/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('picture')).toBe(true)
   })
 })
 