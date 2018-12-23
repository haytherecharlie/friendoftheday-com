/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Profile | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Profile from '../Profile'

 describe('Profile', () => {
   const wrapper = shallow(<Profile/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('profile')).toBe(true)
   })
 })
 