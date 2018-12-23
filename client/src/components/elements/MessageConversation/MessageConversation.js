/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * MessageConversation | Component
 ******************************************/

import React from 'react'
import Bubble from '../../atoms/Bubble/Bubble'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import './styles/MessageConversation.scss'

function MessageConversation({ user, messages }) {
  return (
    <div className="messageconversation">
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
)(MessageConversation)
