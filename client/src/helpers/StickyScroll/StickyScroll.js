class StickyScroll {
  constructor(element) {
    this.el = element
    this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 }
    this.paused = false

    this.initialPosition()
    this.createScrollListener()
  }

  initialPosition = () => this.el.scroll(this.el.offsetWidth, 0)

  createScrollListener = () => {
    this.anchor = this.el.scrollLeft
    this.el.addEventListener('scroll', e => this.scrollEvent())
  }

  scrollEvent = () => {
    if (this.el.scrollLeft !== this.anchor && !this.paused) {
      this.paused = true
      this.anchor =
        this.el.scrollLeft < this.anchor
          ? this.anchor - this.el.offsetWidth
          : this.anchor + this.el.offsetWidth
      this.disableScroll(this.scrollToAnchor)
    }
  }

  preventDefault = e => {
    e = e || window.event
    if (e.preventDefault) e.preventDefault()
    e.returnValue = false
  }

  preventDefaultForScrollKeys = e => {
    if (this.keys[e.keyCode]) {
      this.preventDefault(e)
      return false
    }
  }

  disableScroll = callback => {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onwheel = this.preventDefault // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault // older browsers, IE
      window.ontouchmove = this.preventDefault // mobile
      document.onkeydown = this.preventDefaultForScrollKeys
      callback()
    }
  }

  enableScroll = () => {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onmousewheel = document.onmousewheel = null
      window.onwheel = null
      window.ontouchmove = null
      document.onkeydown = null
    }
  }

  scrollToAnchor = () => {
    this.el.scroll({
      top: 0,
      left: this.anchor,
      behavior: 'smooth'
    })
    this.resetListener()
  }

  resetListener = () => {
    setTimeout(() => {
      this.paused = false
      this.enableScroll()
    }, 1500)
  }
}

export default StickyScroll
