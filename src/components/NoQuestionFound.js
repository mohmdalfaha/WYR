import React from 'react'
import {Link} from 'react-router-dom'

function NoQuestionFound(){
  return (
    <div className='no-match'>
      <p className='no-match-p'>Erorr !!</p>
      <p className='no-match-p'>No Question Found!!.</p>
      <Link to='/' className='noMatch-btn'>Home Page</Link>
    </div>
    )
}
export default NoQuestionFound