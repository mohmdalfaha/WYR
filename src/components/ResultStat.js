import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'

 function ResultStat(props)  {
  const {question,selectedAnswer,users} = props
  const {optionOne,optionTwo} = question

  const usersLength = Object.keys(users).length

  const optOneVoters = optionOne.votes.length
  const optTwoVoters = optionTwo.votes.length
  const votingOptOnePercentage = parseInt((optOneVoters/usersLength)*100)
  const votingOptTwoPercentage = parseInt((optTwoVoters/usersLength)*100)

  return (

    <div className='result-stat'>
        <div className='selected-answer'>
        <span>1-{optionOne.text} | {optOneVoters} voters</span><br/>
         <ProgressBar className='progressbar'
          now={votingOptOnePercentage}
          key={1} label={`${votingOptOnePercentage}%`}
          style={{backgroun:'#9eccfe'}}/>

        <span> 2-{optionTwo.text} | {optTwoVoters} voters </span><br/>
         <ProgressBar  className='progressbar' now={votingOptTwoPercentage} key={2} label={`${votingOptTwoPercentage}%`}/>
         <br/><br/>
        <span className='you-selected'>You've selected "{selectedAnswer}"</span>
        <Link to='/' className='to-home'> Back Home </Link>
        </div>
    </div>
    )
}

export default ResultStat