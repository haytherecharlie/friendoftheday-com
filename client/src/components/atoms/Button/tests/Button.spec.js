/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Button | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

 describe('Button', () => {
   const wrapper = shallow(<Button/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('button')).toBe(true)
   })
 })
 