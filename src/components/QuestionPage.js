import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion,formatDate} from '../utils/helpers'
import { handleSaveAnswer } from '../actions/questions'

import ResultStat from './ResultStat'


class QuestionPage extends Component {
  state = {
    hideOptions: this.props.answeredQuestion ? true : false ,
    selectedAnswer:'',
  }


handleChange = (e) => {
  this.setState({
    ...this.state,
   selectedAnswer: e.target.value
 })}

  handleAnswer = (e) => {
    e.preventDefault()

    const {selectedAnswer} = this.state
    const {dispatch, authedUser, question} = this.props

    dispatch(handleSaveAnswer({
      authedUser,
      qid:question.id,
      answer:selectedAnswer
    }))
}

  render() {
    console.log(this.props)
    const { hideOptions, selectedAnswer } = this.state
    const { users,question, handleAnswer, answeredQuestion } = this.props
    const { name,avatar,timestamp, optionOne, optionTwo} = question

    return (
<div className='question'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'/>
            <div className='question-info'>
              <span>{name}'s Question </span>
              <div>{formatDate(timestamp)}</div>
            </div>

            <form onSubmit={handleAnswer}>
              <h2 className='center'>Would You Rather</h2>
              {answeredQuestion ? (
          <ResultStat users={users} question={question} selectedAnswer={answeredQuestion} />
        ) : (<fieldset className='fieldset' disabled={hideOptions}>
                  <div>
                  <label>
                    <input
                        type="radio"
                        name="option-is"
                        value="optionOne"
                        defaultChecked={answeredQuestion === 'optionOne'}
                        onChange={this.handleChange}
                       />
                    {optionOne.text}</label>
                  </div>
                    <div>
                    <label>
                      <input
                        type="radio"
                        name="option-is"
                        value="optionTwo"
                        defaultChecked={answeredQuestion === 'optionTwo'}
                        onChange={this.handleChange}
                         />
                      {optionTwo.text}</label>
                  </div>
                    <button disabled={selectedAnswer === ''} className='answer-btn' value='submit' >Answer</button>
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
  : users[authedUser].answers[id] === 'optionOne' ? optionOne : optionTwo

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