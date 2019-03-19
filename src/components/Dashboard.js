import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Question from './Question'

class Dashboard extends Component {
  state = {

    displayedQuestions: this.props.unansweredQuestions

  }

  handleAnswered = (e) => {
    const {answeredQuestions} = this.props
    this.setState(() => ({displayedQuestions:answeredQuestions}))
  }

  handleUnanswered = (e) => {
    const {unansweredQuestions} = this.props

    this.setState(() => ({displayedQuestions:unansweredQuestions}))
  }

  render() {
    console.log(this.props)
    return (
      <div className='dashboard'>
        <h3 className='center'>List of polls</h3>
        <div className='questions-filter'>
          <button className='answered-btn' onClick={this.handleAnswered}>Answered</button>
          <button className='unanswered-btn' onClick={this.handleUnanswered}>Unanswered</button>
        </div>
        <ul className='polls-list'>
        {this.state.displayedQuestions.map((id) =>(
          <li key={id} className='poll'>
            <Question id={id}/>
          </li>
          ))}
        </ul>
      </div>
      )
  }
}

function mapStateToProps({ questions, authedUser, users }) {

  const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(users[authedUser].answers)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

  const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
            .filter(qid => !answeredQuestions.includes(qid))
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

  return {
    authedUser,
    answeredQuestions,
    unansweredQuestions,
  }
}

export default connect(mapStateToProps)(Dashboard)