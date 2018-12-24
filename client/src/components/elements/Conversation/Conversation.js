/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Conversation | Component
 ******************************************/

import React, { useEffect, createRef } from 'react'
import Bubble from '../../atoms/Bubble/Bubble'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import './styles/Conversation.scss'

function Conversation({ user, messages }) {
  const convoRef = createRef()
  useEffect(
    () => {
      convoRef.current.scroll(0, convoRef.current.scrollHeight)
    },
    [messages]
  )

  return (
    <div className="conversation" ref={convoRef}>
      {messages.map((message, i) => (
        <Bubble
          key={i}
          type={message.sid === user.uid ? 'sent' : 'received'}
          time={format(message.timestamp, 'h:mm A')}>
          {message.text}
        </Bubble>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  messages: state.messages,
  user: state.user
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)
