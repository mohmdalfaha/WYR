import React, { Component } from 'react'

class NewQuestion extends Component {
  state={
      optionOne:'',
      optionTwo:'',
  }
/*
  handleChange = (e) => {
    const optionOne = e.target.opt1
    const optionTwo = e.target.opt2

    this.setState(() => ({
      optionOne,
      optionTwo,
    }))
  }
*/
  handleSubmit = (e) => {
   const {optionOne, optionTwo} = this.state

    console.log('New optionOne: ',optionOne)
    console.log('New optionTwo: ',optionTwo)

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
    }))
  }
  render() {
    const { optionOne, optionTwo } = this.state
    const emptyOpts = (optionOne && optionTwo) === ''
    return(
      <div>
        <h3 className='center'> New Question </h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <input
              placeholder="Option One"
              value={optionOne}
              onChange={(e) => this.setState({ optionOne: e.target.value })}
              className='opt1'
              maxLength={50}
              />
          <input
              placeholder="Option two"
              value={optionTwo}
              onChange={(e) => this.setState({ optionTwo: e.target.value })}
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

export default NewQuestion