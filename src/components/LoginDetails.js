import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginDetails extends Component {
  render(){
    const {authedUser,avatar,name} = this.props
    return(
     <div className='login-details'>

      <img
            alt={`Avatar of ${authedUser}`}
            src={avatar}
            className='user-avatar'/>
            <h6 className='user-name'>{name}<br/>Logged In</h6>
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

