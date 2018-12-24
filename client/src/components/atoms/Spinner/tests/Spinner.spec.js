/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Spinner | Tests
 ******************************************/
import React from 'react'
import { shallow } from 'enzyme'
import Spinner from '../Spinner'

 describe('Spinner', () => {
   const wrapper = shallow(<Spinner/>)

   it('renders a component', () => {
     expect(wrapper.hasClass('spinner')).toBe(true)
   })
 })
 