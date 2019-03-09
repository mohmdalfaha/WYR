import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion,formatDate} from '../utils/helpers'
import { handleSaveAnswer } from '../actions/questions'

import ResultStat from './ResultStat'


class QuestionPage extends Component {
  state = {
    selectedAnswer:''
  }

  handleAnswer = (e) => {
    e.preventDefault()

    this.setState({
      selectedAnswer:e.target.value
    })

    const answer = e.target.value
    const {dispatch, authedUser, question} = this.props

    dispatch(handleSaveAnswer({
      qid:question.id,
      answer
    }
     ))

}

  render() {
    console.log(this.props)
    const { selectedAnswer } = this.state
    const { users,question, handleAnswer, answeredQuestion } = this.props
    const { name,avatar,timestamp, optionOne, optionTwo} = question

    return (
<div className='question-page'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'/>
            <div className='question-info'>
              <span>{name}'s Question </span>
              <div>{formatDate(timestamp)}</div>
            </div>
            <form >
              <h2 className='center'>Would You Rather</h2>
              {answeredQuestion ? (
          <ResultStat users={users} question={question} selectedAnswer={answeredQuestion} />
        ) : (<fieldset className='fieldset'>
                <button className='answer-btn'value='optionOne'
                 onClick={this.handleAnswer}>{optionOne.text}</button>
                <button className='answer-btn' value='optionTwo'
                 onClick={this.handleAnswer}>{optionTwo.text}</button>
            </fieldset>)}
            </form>
        </div>
      )
  }
}

function mapStateToProps ({ authedUser, questions, users}, props) {
  const { id } = props.match.params
  const question = questions[id]
  const {optionOne,optionTwo} = question
  const answeredQuestion = !(users[authedUser].answers[id])
  ? null
  : users[authedUser].answers[id] === 'optionOne' ? optionOne.text : optionTwo.text

  return {
    users,
    answeredQuestion,
    authedUser,
    question:question
             ? formatQuestion(question, users[question.author])
             : null
  }
}

export default connect(mapStateToProps)(QuestionPage)