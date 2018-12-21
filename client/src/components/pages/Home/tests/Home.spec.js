/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Home | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../Home'

 describe('Home', () => {
   const wrapper = shallow(<Home/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('home')).toBe(true)
   })
 })
 