import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'


 function ResultStat(props)  {
  const {question,selectedAnswer,users} = props
  const {optionOne,optionTwo} = question

  const usersLength = Object.keys(users).length

  const optOneVoters = optionOne.votes.length
  const optTwoVoters = optionTwo.votes.length
  const votingOptOnePercentage = (optOneVoters/usersLength)*100
  const votingOptTwoPercentage = (optTwoVoters/usersLength)*100


  return (

    <div className='result-stat'>
        <div className='selected-answer'>
        <span>1-{optionOne.text} | {optOneVoters} voters</span>
        <ProgressBar now={votingOptOnePercentage}label={`${votingOptOnePercentage}`}/>
        <span> 2-{optionTwo.text} | {optOneVoters} voters </span>
        <ProgressBar now={votingOptTwoPercentage} label={`${votingOptTwoPercentage}`}/>

        <span>You selected "{props.selectedAnswer}"</span>
        </div>
    </div>
    )
}

export default ResultStat