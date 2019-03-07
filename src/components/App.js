import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'


import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
//<QuestionPage match={{params: {id:'am8ehyc8byjqgar0jgpub9'}}} />
import NewQuestion from './NewQuestion'
import Header from './Header'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props
      return (
      <div className="list-container">
        <LoadingBar style={{background:'#007eff'}}/>
        {this.props.loading === true
          ? null
          :  <div>
          <LogIn/>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps ({authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
