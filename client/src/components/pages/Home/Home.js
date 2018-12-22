/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Home | Component
 ******************************************/

import React, { createRef, useEffect } from 'react'
import StickyScroll from '../../../helpers/StickyScroll'
import './styles/Home.scss'

function ImageSlider() {
  const swiperRef = createRef()

  useEffect(() => {
    const el = swiperRef.current
    StickyScroll(el)
    return () => el.removeEventListener('scroll', () => console.log('removed event'))
  }, [])

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper__wrapper">
        <div className="swiper__child one">one</div>
        <div className="swiper__child two">two</div>
        <div className="swiper__child three">three</div>
      </div>
    </div>
  )
}

export default ImageSlider
