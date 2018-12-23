/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Button | Component
 ******************************************/

import React from 'react'
import { MdSend } from 'react-icons/md'
import './styles/Button.scss'

function Button({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <MdSend className="button__icon" />
    </button>
  )
}

export default Button
