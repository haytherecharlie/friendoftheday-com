/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Home | Component
 ******************************************/

import React from 'react'
import Swiper from '../../elements/Swiper/Swiper'
import MessageInput from '../../elements/MessageInput/MessageInput'
import MessageConversation from '../../elements/MessageConversation/MessageConversation'
import Header from '../../elements/Header/Header'
import Profile from '../../elements/Profile/Profile'
import './styles/Home.scss'

function Home() {
  return (
    <div className="home">
      <Swiper>
        <div className="their-profile">
          <Profile type="partner" />
        </div>
        <div className="message-center">
          <Header />
          <MessageConversation />
          <MessageInput />
        </div>
        <div className="my-profile">
          <Profile type="user" />
        </div>
      </Swiper>
    </div>
  )
}

export default Home
