import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleLogIn} from '../actions/authedUser'

class LoginDetails extends Component {
  state={
    LogOut:false
  }

  handleLogOut = (e) =>{
    e.preventDefault()
    const {dispatch} = this.props
    const id = null

    dispatch(handleLogIn(id))

    this.setState({
      logOut:true
    })

  }

  render(){
    if (this.state.LogOut === true) {
      return <Redirect to='/'/>

    }
    const {authedUser,avatar,name} = this.props
    const handleLogOut = this.handleLogOut
    return(
     <div className='login-details'>

      <img
            alt={`Avatar of ${authedUser}`}
            src={avatar}
            className='user-avatar'/>
            <span className='user-name'>{name}</span>
            <button onClick={handleLogOut} className='log-out'>Log Out</button>

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

