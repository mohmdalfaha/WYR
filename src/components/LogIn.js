import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {Link} from 'react-router-dom'

class LogIn extends Component {
  state={
    selectedUser:null
  }

  handleChange = (e) => {
    e.preventDefault()
    const user = e.target.value
    console.log(user)
    this.setState(() =>({
      selectedUser: user
    }))
  }

  handleLogin = () => {
    const {dispatch} = this.props
    const authedUser = this.state.selectedUser
    dispatch(setAuthedUser(authedUser))
  }
  render(){
    const {users} = this.props
    const userIds = Object.keys(users)
    return (
      <div className='login-page'>
        <div className='user-details'>
        <h1 className='center'>Would You Rather Game</h1>
        <p> A game where each one can post a challenging<br/>
         question of two options, and others will answer with only one option</p>
           <p> At the same time, the user can answer others' questions.
           <br/> The most answering and qeustioning person will be ranked at the top</p>
          <select onChange={this.handleChange}>
            {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name} </option>
              ))
            }
          </select>
          <Link to='/Dashboard' className='login-btn' onClick={this.handleLogin}>
            Log In
          </Link>
        </div>
      </div>

      )
  }
}

function mapStateToProps(state){
  const users = Object.keys(state.users).map(key =>
    state.users[key]
  )

  return {
    users,
  }
}

export default connect(mapStateToProps)(LogIn)