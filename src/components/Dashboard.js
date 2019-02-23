import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Question from './Question'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='dashboard'>
        <h3 className='center'>List of polls</h3>
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