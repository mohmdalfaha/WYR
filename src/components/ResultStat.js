import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'


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
         <ProgressBar className='progressbar' now={votingOptOnePercentage} key={1} label={`${votingOptOnePercentage}%`}/>

        <span> 2-{optionTwo.text} | {optTwoVoters} voters </span><br/>
         <ProgressBar  className='progressbar' now={votingOptTwoPercentage} key={2} label={`${votingOptTwoPercentage}%`}/>
         <br/><br/>
        <span className='you-selected'>You've selected "{props.selectedAnswer}"</span>
        </div>
    </div>
    )
}

export default ResultStat