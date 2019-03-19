import React from 'react'
import {Link} from 'react-router-dom'

function NoPageFound(){
  return (
    <div className='no-match'>
      <p className='no-match-p'>404</p>
      <p className='no-match-p'>No Page Found!! Please Login.</p>
      <Link to='/' className='noMatch-btn'>Login Page</Link>
    </div>
    )
}

export default NoPageFound