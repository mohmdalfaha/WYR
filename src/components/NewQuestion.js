import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'


class NewQuestion extends Component {
  state={
        title:'',
        optionOne:'',
        optionTwo:'',
        toDashboard: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
   const {title, optionOne, optionTwo } = this.state
   const { dispatch} = this.props

  dispatch(handleAddQuestion(title, optionOne,optionTwo))

   console.log('the new questions are:', title,optionOne,optionTwo)

   this.setState(() =>({
    title:'',
    optionOne:'',
    optionTwo:'',
    toDashboard: true,
   }))

}

  render() {
    const { optionOne, optionTwo,title, toDashboard } = this.state

    if (toDashboard === true) {
      return <Redirect to='/'/>

    }

    const emptyOpts = (optionOne && optionTwo && title) === ''
    return(
      <div>
        <h3 className='center'> New Question </h3>
        <h1 className='center'> Would You Rather ? </h1>

        <form className='new-question' onSubmit={(this.handleSubmit)}>
          <input
              placeholder="title"
              value={title}
              onChange={(e)=>{this.setState({title:e.target.value})}}
              className='title'
              maxLength={50}
              />
          <input
              placeholder="Option One"
              value={optionOne}
              onChange={(e)=>{this.setState({optionOne:e.target.value})}}
              className='opt1'
              maxLength={100}
              />
          <input
              placeholder="Option two"
              value={optionTwo}
              onChange={(e)=>{this.setState({optionTwo:e.target.value})}}
              className='opt2'
              maxLength={100}
              />
              <button
                className='btn'
                type='submit'
                disabled={emptyOpts}>
                Add Question
              </button>
        </form>
        </div>
      )
  }
}

export default connect()(NewQuestion)