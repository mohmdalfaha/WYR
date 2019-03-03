import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state={
        optionOne:'',
        optionTwo:'',
  }
  handleSubmit = (e) => {
    e.preventDefault()
   const {optionOne, optionTwo} = this.state
   const { dispatch} = this.props

  dispatch(handleAddQuestion(optionOne,optionTwo))

   console.log('the new questions are:', optionOne,optionTwo)


}

  render() {
    const { optionOne, optionTwo } = this.state
    const emptyOpts = (optionOne && optionTwo) === ''
    return(
      <div>
        <h3 className='center'> New Question </h3>
        <h1 className='center'> Would You Rather ? </h1>

        <form className='new-question' onSubmit={(this.handleSubmit)}>
          <input
              placeholder="Option One"
              value={optionOne}
              onChange={(e)=>{this.setState({optionOne:e.target.value})}}
              className='opt1'
              maxLength={50}
              />
          <input
              placeholder="Option two"
              value={optionTwo}
              onChange={(e)=>{this.setState({optionTwo:e.target.value})}}
              className='opt2'
              maxLength={50}
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