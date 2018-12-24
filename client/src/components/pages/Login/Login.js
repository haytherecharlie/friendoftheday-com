/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Login | Component
 ******************************************/

import React, { useEffect, useState } from 'react'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'
import { firebase, uiConfig } from '../../../lib/Firebase/Firebase'
import Spinner from '../../atoms/Spinner/Spinner'
import logoPath from '../../../assets/images/logo.png'
import './styles/Login.scss'

function Login({ isAuthed }) {
  const [authTimeout, changeAuthTimeout] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeAuthTimeout(true)
    }, 3000)
    return () => clearTimeout(timeout)
  })

  return (
    <div className="login">
      <img className="login__logo" alt="fotd logo" src={logoPath} />
      {isAuthed && authTimeout ? (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default Login
