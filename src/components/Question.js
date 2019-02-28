  import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate} from '../utils/helpers'




class Question extends Component {
  render() {
  //console.log(this.props)
    const { question } = this.props

    if (question === null) {
      return <p> This Question doesn't exists</p>
    }

    const { name,avatar, author, id, timestamp,title, optionOne, optionTwo} = question
    return (

      <div className='question'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'/>
            <div className='question-info'>
              <span>{name}</span>
              <div>{formatDate(timestamp)}</div>
            </div>
            <div>
              <h2 className='center'>Would You Rather</h2>
              <h5 className='center'>'{title}'</h5>
              <button className='btn'>View</button>
            </div>
        </div>

      )
  }
}

function mapStateToProps ({authedUser, users, questions},{id}) {
  const question = questions[id]
//still needs
  return {
    authedUser,
    question : question
             ? formatQuestion(question, users[question.author], authedUser)
             : null
  }
}
export default connect(mapStateToProps)(Question)