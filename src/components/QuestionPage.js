import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion,formatDate} from '../utils/helpers'
import { handleSaveAnswer } from '../actions/questions'


class QuestionPage extends Component {
  state = {
    hideOptions: false,
    selectedAnswer:'',
  }

  componentDidMount(){
    this.setState({
      hideOptions: this.props.answeredQuestion ? true : false
    })
  }

/*
  handleChange = (e) => {
    e.preventDefault()

    const option = e.target.value

    this.setState(() => ({
          selectedAnswer:option,
        }))
  }
*/

  handleAnswer = (e) => {
    e.preventDefault()
    const answer = this.state.selectedAnswer
    const { dispatch, question, authedUser } = this.props

    const info = {
      qid: question.id,
      author:authedUser,
      answer,
    }

    dispatch(handleSaveAnswer(info))
  }


  render() {
    console.log(this.props)
    const { hideOptions, selectedAnswer } = this.state
    const { question, handleAnswer, answeredQuestion } = this.props
    const { name,avatar,timestamp, optionOne, optionTwo} = question

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
            <form onSubmit={handleAnswer}>
              <h2 className='center'>Would You Rather</h2>
                <fieldset className='fieldset' disabled={hideOptions}>
                  <div>
                    <input
                        type="radio"
                        id="opt1"
                        name="answer"
                        value={"optionOne"}
                        defaultChecked={answeredQuestion === 'optionOne'}
                        onChange={(e) => { this.setState({ selectedAnswer: e.target.value})}}
                       />
                    <label>{optionOne.text}</label>
                  </div>
                    <div>
                      <input
                          type="radio"
                          id="opt2"
                          name="answer"
                          value={"optionTwo"}
                          defaultChecked={answeredQuestion === 'optionTwo'}
                          onChange={(e) => { this.setState({ selectedAnswer: e.target.value})}}
                         />
                      <label>{optionTwo.text}</label>
                  </div>
                    <button disabled={selectedAnswer === ''} className='answer-btn' value='submit' >Answer</button>
                </fieldset>
            </form>
        </div>
      )
  }
}

function mapStateToProps ({ authedUser, questions, users}, props) {
  const { id } = props.match.params
  const question = questions[id]
  const answeredQuestion = users[authedUser].answers[id]

  return {
    users,
    answeredQuestion,
    authedUser,
    question : question
             ? formatQuestion(question, users[question.author], authedUser)
             : null
  }
}
export default connect(mapStateToProps)(QuestionPage)