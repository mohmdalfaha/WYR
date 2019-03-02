import React, { Component } from 'react'


class NavBar extends Component {
  render() {
    return (
        <nav className='nav'>
      <ul>
        <li>
          <div to='/' exact activeClassName='active'>
            Home
          </div>
        </li>
        <li>
          <div to='/LeaderBoard' activeClassName='active'>
            leaderboard
          </div>
        </li>
        <li>
          <div to='/NewQuestion' exact activeClassName='active'>
            New Question
          </div>
        </li>
      </ul>
    </nav>
      )
  }
}

export default NavBar