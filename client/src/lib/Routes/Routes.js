/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Routes | Dynamic Routing
 ******************************************/

import React, { useEffect, useState } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { firebase } from '../Firebase/Firebase'
import Home from '../../components/pages/Home/Home'
import Login from '../../components/pages/Login/Login'
import routes from '../../config/routes.json'

function Routes({ location: { pathname } }) {
  const [loggedIn, changeLogIn] = useState(false)

  useEffect(() => {
    const observer = firebase.auth().onAuthStateChanged(user => changeLogIn(!!user))
    return () => observer()
  }, [])

  useEffect(
    () => {
      if (window.notification.listening) window.notification.hide()
    },
    [pathname]
  )

  return (
    <Switch>
      <Route exact path={routes.HOME} component={loggedIn ? Home : Login} />
    </Switch>
  )
}

export default withRouter(Routes)
