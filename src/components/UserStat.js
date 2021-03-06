import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserStat extends Component {
  render (){
    const {user} = this.props

    if (user === null) {
      return <span> No user exist with this ID </span>
    }

    const {answers,questions,avatarURL,name} = user
    const answersLength = Object.keys(answers).length
    const questionsLength = questions.length
    const score =  answersLength + questionsLength

    return (
      <div className='user-stat'>



      <div className='UserStat-answers'>

      </div>
      <table>
  <tr className='header-table'>
    <th>User</th>
    <th>questions</th>
    <th>Answers</th>
    <th>Score</th>
  </tr>
  <tr className='body-table'>
    <td >
    <img
          src={avatarURL}
          alt={`avatar of ${name}`}
          className='UserStat-avatar'
        />
    <span className='userStat-name'>{name}</span>
    </td>
    <td>{questionsLength}</td>
    <td>{answersLength}</td>
    <td>{score}</td>
  </tr>

</table>
      </div>
    )
  }
}

function mapStateToProps({users,},{id}){
  const user = users[id]
  return {
    user,
  }
}

export default connect(mapStateToProps)(UserStat)