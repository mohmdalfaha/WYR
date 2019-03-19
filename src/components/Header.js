import React,{ Component } from 'react'
import NavBar from './NavBar'
import LoginDetails from './LoginDetails'
import {connect} from 'react-redux'

class Header extends Component  {
  render() {
  const {authedUser} = this.props
   return (
      <div className='header'>
        <NavBar/>
        {authedUser && <LoginDetails /> }
      </div>
    )
  }
}


function mapStateToProps  ({authedUser}) {
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(Header)