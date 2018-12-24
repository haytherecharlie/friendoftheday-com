/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Spinner | Component
 ******************************************/

import React from 'react'
import './styles/Spinner.scss'

function Spinner() {
  return (
    <svg className="spinner">
      <circle cx="20" cy="20" r="18" />
    </svg>
  )
}

export default Spinner
