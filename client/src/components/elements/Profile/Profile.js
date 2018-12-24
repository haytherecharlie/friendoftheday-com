/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Profile | Component
 ******************************************/

import React from 'react'
import { connect } from 'react-redux'
import USERPIC from '../../../assets/images/charlie.png'
import PARTNERPIC from '../../../assets/images/phillip.png'
import './styles/Profile.scss'

function Profile({ user, partner, type }) {
  let { name, picture, bio } = type === 'user' ? user : partner
  picture = type === 'user' ? USERPIC : PARTNERPIC
  return (
    <div className="profile">
      <img className="profile__picture" alt="profile" src={picture} />
      <h2 className="profile__name">{name}</h2>
      <p className="profile__bio">{bio}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  partner: state.partner
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
