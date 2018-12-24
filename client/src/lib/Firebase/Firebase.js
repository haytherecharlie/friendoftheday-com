/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Firebase | Dynamic Routing
 ******************************************/
import app from 'firebase/app'
import 'firebase/auth'
import routes from '../../config/routes.json'

class Firebase {
  constructor() {
    this.firebase = app
    this.firebase.initializeApp(this.config)
  }

  config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  }

  uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: `${routes.MESSENGER}`,
    signInOptions: [
      app.auth.GoogleAuthProvider.PROVIDER_ID,
      app.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }
}

export const { firebase, uiConfig } = new Firebase()
