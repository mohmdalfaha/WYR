import React from 'react'
import NavBar from './NavBar'
import LoginDetails from './LoginDetails'

function Header () {
  return (
    <div className='header'>
      <NavBar/>
      <LoginDetails />
    </div>
    )
}
export default Header