/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * MessageInput | Component
 ******************************************/

import React, { createRef } from 'react'
import { connect } from 'react-redux'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { setMessage } from '../../../lib/Redux/Redux'
import './styles/MessageInput.scss'

function MessageInput({ user: { uid }, setMessage }) {
  const inputRef = createRef()

  const addMessageToRedux = () => {
    let { value } = inputRef.current
    if (value !== '') {
      setMessage({ sid: uid, timestamp: new Date().getTime(), text: value })
      inputRef.current.value = ''
    }
  }

  return (
    <div className="messageinput">
      <Input ref={inputRef} onKeyPress={addMessageToRedux} />
      <Button onClick={addMessageToRedux} />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  setMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput)
