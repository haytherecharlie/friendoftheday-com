/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Login | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Login from '../Login'

 describe('Login', () => {
   const wrapper = shallow(<Login/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('login')).toBe(true)
   })
 })
 