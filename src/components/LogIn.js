import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogIn } from '../actions/authedUser'
import {Redirect} from 'react-router-dom'

class LogIn extends Component {
  state={
    selectedUser:'',
    toDashboard:false
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
    const {selectedUser} = this.state //Make sure while destructuing use '{}'

    const authedUser = selectedUser
    dispatch(handleLogIn(authedUser))

    this.setState({
      toDashboard:true
    })
  }
  render(){
     const {users} = this.props
     const {toDashboard} = this.state

     if(toDashboard){
      return <Redirect to='/Dashboard'/>
     }

    return (
      <div className='login-page'>
        <div className='user-details'>
        <h1 className='center'>Would You Rather Game</h1>
        <p> A game where each one can post a challenging<br/>
         question of two options, and others will answer with only one option</p>
           <p> At the same time, the user can answer others' questions.
           <br/> The most answering and qeustioning person will be ranked at the top</p>
          <select onChange={this.handleChange}>
            <option></option>
            {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name} </option>
              ))
            }
          </select>
          <button  className='login-btn'
          onClick={this.handleLogin} disabled={this.state.selectedUser === ''}>
            Log In
          </button>
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