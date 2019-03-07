import React, { Component } from 'react'
import {connect} from 'react-redux'
import UserStat from './UserStat'

class LeaderBoard extends Component {
  render(){
  const {usersIds} = this.props

  return (
    <div className='leader-board'>
      <div className='rainking-lis'>
      <ul>
        {usersIds.map((id) =>(
                  <li key={id}>
                    <UserStat id={id}/>
                  </li>
                ))}
      </ul>
      </div>
    </div>
    )
}}


function mapStateToProps({users,questions,authedUser}){
return {
   usersIds: Object.keys(users)
      .sort((a, b) => (
         Object.keys(users[b].answers).length + users[b].questions.length )
           - ( Object.keys(users[a].answers).length + users[a].questions.length ) )
}
}

export default connect(mapStateToProps)(LeaderBoard)