import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'


import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
//<QuestionPage match={{params: {id:'am8ehyc8byjqgar0jgpub9'}}} />
import NewQuestion from './NewQuestion'


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
          :  <QuestionPage match={{params: {id:'loxhs1bqm25b708cmbf3g'}}}/>
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
