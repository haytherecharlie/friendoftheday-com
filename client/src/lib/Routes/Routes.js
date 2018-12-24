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
  const [auth, changeAuth] = useState('spinner')

  useEffect(() => {
    // firebase.auth().signOut()
    const observer = firebase.auth().onAuthStateChanged(user => changeAuth(!!user))
    return () => observer()
  }, [])

  useEffect(
    () => {
      window.notification.listening && window.notification.hide()
    },
    [pathname]
  )

  return (
    <Switch>
      <Route
        exact
        path={routes.HOME}
        render={props => (auth === true ? <Home {...props} /> : <Login {...props} auth={auth} />)}
      />
    </Switch>
  )
}

export default withRouter(Routes)
