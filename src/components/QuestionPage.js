import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion,formatDate} from '../utils/helpers'
import { handleSaveAnswer } from '../actions/questions'


class QuestionPage extends Component {
  state = {
    hideOptions: false,
    selectedAnswer:'optionOne',
  }

  componentDidMount(){
    this.setState({
      hideOptions: this.props.answeredQuestion ? true : false
    })
  }

  handleAnswer = (e) => {
    e.preventDefault()
    const answer = this.state.selectedAnswer
    const { dispatch, question, authedUser } = this.props

    dispatch(handleSaveAnswer({
      qid: question.id,
      authedUser,
      answer,
    }))
  }


  render() {
    console.log(this.props)
    const { hideOptions } = this.state
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
            <form>
              <h2 className='center'>Would You Rather</h2>
                <fieldset disabled={hideOptions}>
                  <div>
                    <input
                        type="radio"
                        id="opt1"
                        name="answer"
                        value={optionOne.text}
                        defaultChecked={answeredQuestion === 'optionOne'}
                       />
                    <label>{optionOne.text}</label>
                  </div>
                    <div>
                      <input
                          type="radio"
                          id="opt2"
                          name="answer"
                          value={optionTwo.text}
                          defaultChecked={answeredQuestion === 'optionTwo'}
                         />
                      <label>{optionTwo.text}</label>
                  </div>
                    <button value='submit' onSubmit={handleAnswer}>Answer</button>
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