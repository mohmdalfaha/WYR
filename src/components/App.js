import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Header from './Header'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import UserStat from './UserStat'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props
      return (
       <Router>
        <Fragment>
        <LoadingBar style={{background:'#007eff'}}/>
         <div className="list-container">
          {this.props.loading === true
            ? null
            :  <div>
                <Route path='/' exact component={LogIn}/>
                <Route path='/Dashboard'  component={Dashboard}/>
                <Route path='/LeaderBoard' component={LeaderBoard}/>
                <Route path='/QuestionPage/:id' component={QuestionPage}/>
                <Route path='/NewQuestion' component={NewQuestion}/>
                <Route path='/UserStat' component={UserStat}/>
               </div>}
         </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
