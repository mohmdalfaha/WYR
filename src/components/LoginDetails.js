import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class LoginDetails extends Component {
  render(){
    const {authedUser,avatar,name} = this.props
    return(
     <div className='login-details'>

      <img
            alt={`Avatar of ${authedUser}`}
            src={avatar}
            className='user-avatar'/>
            <span className='user-name'>{name}</span>
              <Link to='/' className='log-out'>Log Out</Link>

      </div>
      )
  }
}

function mapStateToProps({users,authedUser}) {
  const avatar = users[authedUser].avatarURL
  const name = users[authedUser].name
  return {
    authedUser,
    avatar,
    name
  }
}

export default connect(mapStateToProps)(LoginDetails)

