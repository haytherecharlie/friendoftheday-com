/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Home | Component
 ******************************************/

import React, { createRef, useEffect } from 'react'
import StickyScroll from '../../../helpers/StickyScroll/StickyScroll'
import './styles/Home.scss'

function ImageSlider() {
  const swiperRef = createRef()

  /**
   * 1. Snap to middle position
   * 2. Allow scroll to a point then disable handler for .5 seconds.
   * 3.
   */

  useEffect(() => {
    const el = swiperRef.current
    new StickyScroll(el)

    // ScrollStop(el, () => smoothScroll(el))
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
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     selectedIndex: 0,
  //     sliderControlNextDisplay: false,
  //     sliderControlPrevDisplay: false,
  //     startingX: null,
  //     changeTouchesClientX: null
  //   }
  // }

  // showNext = () => {
  //   let index =
  //     this.state.selectedIndex + 1 >= this.props.content.size ? 0 : this.state.selectedIndex + 1
  //   this.setState({ selectedIndex: index })
  // }

  // showPrevious = () => {
  //   let index =
  //     this.state.selectedIndex - 1 < 0 ? this.props.content.size - 1 : this.state.selectedIndex - 1
  //   this.setState({ selectedIndex: index })
  // }

  // handleTouchStart = event => {
  //   // console.log("touch start", event.touches[0].clientX);
  //   const startingX = event.touches[0].clientX
  //   this.setState({ startingX })
  // }
  // handleTouchMove = event => {
  //   // console.log("touch move", event.changedTouches[0].clientX);
  //   const changes = this.state.startingX - event.changedTouches[0].clientX
  //   const imageSliderWidth = this.refs.imageSlider.clientWidth

  //   if (changes > 0 && changes / imageSliderWidth > 1 / 5) {
  //     this.showNext()
  //     this.setState({ startingX: null })
  //   }

  //   if (changes < 0 && changes / imageSliderWidth > -1 / 5) {
  //     this.showPrevious()
  //     this.setState({ startingX: null })
  //   }
  // }

  // selectShow = event => {
  //   const selectedIndex = parseInt(event.currentTarget.dataset.index) || 0
  //   this.setState({ selectedIndex })
  // }

  // renderDots = () => {
  //   return this.props.content.map((item, index) => {
  //     return (
  //       <li
  //         className={`slider-dot ${this.state.selectedIndex === index ? 'active' : ''}`}
  //         key={index}>
  //         <button onClick={this.selectShow} data-index={index} s>
  //           <span />
  //         </button>
  //       </li>
  //     )
  //   })
  // }
}

export default ImageSlider
