/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Swiper | Component
 ******************************************/

import React, { createRef, useEffect } from 'react'
import StickyScroll from '../../../helpers/StickyScroll'
import './styles/Swiper.scss'

function Swiper({ children }) {
  const swiperRef = createRef()

  useEffect(() => {
    const el = swiperRef.current
    StickyScroll(el)
    return () => el.removeEventListener('scroll', () => console.log('removed event'))
  }, [])

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper__wrapper">{children}</div>
    </div>
  )
}

export default Swiper
