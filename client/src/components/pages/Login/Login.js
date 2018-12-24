/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Login | Component
 ******************************************/

import React from 'react'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'
import { firebase, uiConfig } from '../../../lib/Firebase/Firebase'
import logoPath from '../../../assets/images/logo.png'
import './styles/Login.scss'

function Login() {
  return (
    <div className="login">
      <img className="login__logo" alt="fotd logo" src={logoPath} />
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default Login
