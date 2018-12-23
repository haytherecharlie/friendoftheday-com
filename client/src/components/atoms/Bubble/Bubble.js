/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Bubble | Component
 ******************************************/

import React from 'react'
import './styles/Bubble.scss'

function Bubble({ type, time, children }) {
  return (
    <div className={`bubble ${type}`}>
      <div className={`bubble__message`}>{children}</div>
      <div className="bubble__timestamp">{time}</div>
    </div>
  )
}

export default Bubble
