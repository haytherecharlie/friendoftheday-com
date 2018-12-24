/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Login | Component
 ******************************************/

import React from 'react'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'
import { firebase, uiConfig } from '../../../lib/Firebase/Firebase'
import Spinner from '../../atoms/Spinner/Spinner'
import logoPath from '../../../assets/images/logo.png'
import './styles/Login.scss'

function Login({ auth }) {
  const switchSpinnerAuthPane =
    auth === 'spinner' ? (
      <Spinner />
    ) : (
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    )

  return (
    <div className="login">
      <img className="login__logo" alt="fotd logo" src={logoPath} />
      {switchSpinnerAuthPane}
    </div>
  )
}

export default Login
