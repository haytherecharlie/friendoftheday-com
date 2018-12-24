/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Header | Component
 ******************************************/

import React from 'react'
import logoBlack from '../../../assets/images/logo-black.png'
import Countdown from '../../atoms/Countdown/Countdown'
import './styles/Header.scss'

function Header() {
  return (
    <div className="header">
      <img className="header__logo" alt="fotd logo" src={logoBlack} />
      <Countdown endTime="1523071729543" />
    </div>
  )
}

export default Header
