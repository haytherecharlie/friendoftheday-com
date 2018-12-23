/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Input | Component
 ******************************************/

import React, { useState } from 'react'
import './styles/Input.scss'

const Input = React.forwardRef(({ onKeyPress }, ref) => {
  const [text, setText] = useState('')

  const handleEnter = e => {
    if (e.key === 'Enter') {
      return onKeyPress()
    }
  }

  return (
    <input
      className="input"
      placeholder="Say Something.."
      ref={ref}
      value={text}
      onChange={() => setText(ref.current.value)}
      onKeyPress={handleEnter}
    />
  )
})

export default Input
