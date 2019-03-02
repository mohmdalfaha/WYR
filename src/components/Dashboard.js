import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Question from './Question'
import NavBar from './NavBar'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='dashboard'>
        <NavBar />
        <h3 className='center'>List of polls</h3>
        <div className='questions-filter'>
          <button className='answered-btn'>Answered</button>
          <button className='unanswered-btn'>Unanswered</button>
        </div>
        <ul className='polls-list'>
        {this.props.questionIds.map((id) =>(
          <li key={id}>
            <Question id={id}/>
          </li>
          ))}
        </ul>
      </div>
      )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)