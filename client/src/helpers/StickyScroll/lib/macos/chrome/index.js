function macOsChrome(element) {
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }
  let paused = false
  let anchor = null

  const init = () => {
    windowResize()
    initialPosition()
    createScrollListener()
  }

  const windowResize = () => {
    window.addEventListener('resize', () => {
      anchor = element.offsetWidth
      initialPosition()
    })
  }

  const initialPosition = () => element.scroll(element.offsetWidth, 0)

  const createScrollListener = () => {
    anchor = element.scrollLeft
    element.addEventListener('scroll', e => scrollEvent())
  }

  const scrollEvent = () => {
    if (element.scrollLeft !== anchor && !paused) {
      paused = true
      anchor =
        element.scrollLeft < anchor ? anchor - element.offsetWidth : anchor + element.offsetWidth
      disableScroll(scrollToAnchor)
    }
  }

  const preventDefault = e => {
    e = e || window.event
    if (e.preventDefault) e.preventDefault()
    e.returnValue = false
  }

  const preventDefaultForScrollKeys = e => {
    if (keys[e.keyCode]) {
      preventDefault(e)
      return false
    }
  }

  const disableScroll = callback => {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', preventDefault, false)
      window.onwheel = preventDefault // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault // older browsers, IE
      window.ontouchmove = preventDefault // mobile
      document.onkeydown = preventDefaultForScrollKeys
      callback()
    }
  }

  const enableScroll = () => {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', preventDefault, false)
      window.onmousewheel = document.onmousewheel = null
      window.onwheel = null
      window.ontouchmove = null
      document.onkeydown = null
    }
  }

  const scrollToAnchor = () => {
    element.scroll({
      top: 0,
      left: anchor,
      behavior: 'smooth'
    })
    resetListener()
  }

  const resetListener = () => {
    setTimeout(() => {
      paused = false
      enableScroll()
    }, 1500)
  }

  init()
}

export default macOsChrome
