/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Redux | Global State
/******************************************/

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import defaultMessages from './defaultMessages.json'

class Redux {
  constructor() {
    this.state = this.initialState()
  }

  initialState = () => ({
    user: {
      uid: '01',
      name: 'Charlie Hay'
    },
    messages: defaultMessages
  })

  types = {
    SET_MESSAGE: 'SET_MESSAGE'
  }

  setMessage = message => ({
    type: this.types.SET_MESSAGE,
    message
  })

  reducers = (state = this.state, action) => {
    switch (action.type) {
      case this.types.SET_MESSAGE:
        let newArray = state.messages.slice()
        newArray.splice(newArray.length, 0, action.message)
        return { ...state, messages: newArray }

      default:
        return state
    }
  }
}

const redux = new Redux()
const { reducers, state } = redux
export const { setMessage } = redux
export const store = createStore(reducers, state, composeWithDevTools())
