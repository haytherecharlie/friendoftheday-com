/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Header | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

 describe('Header', () => {
   const wrapper = shallow(<Header/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('header')).toBe(true)
   })
 })
 