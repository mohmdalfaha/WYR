import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'


//import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="list-container">
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <QuestionPage match={{params: {id:'xj352vofupe1dqz9emx13r'}}} />
        }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
