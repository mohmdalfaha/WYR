import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/LeaderBoard' exact activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/NewQuestion' exact activeClassName='active'>
            New Question
          </NavLink>

        </li>
      </ul>
    </nav>
      )
  }
}

export default NavBar