  import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Header from './Header'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import UserStat from './UserStat'
import NoPageFound from './NoPageFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {loading} = this.props
      return (
       <Router>
       <Fragment >
        <LoadingBar style={{background:'#007eff'}}/>
         <div className="list-container">
          <Header/>
          {loading
            ? <LogIn/>
            : <div>
                  <Switch>
                  <Route path='/'  exact component={Dashboard}/>
                  <Route path='/LeaderBoard' exact component={LeaderBoard}/>
                  <Route path='/QuestionPage/:id' exact component={QuestionPage}/>
                  <Route path='/add'exact component={NewQuestion}/>
                  <Route path='/UserStat'exact component={UserStat}/>
                  <Route component={NoPageFound}/>
                  </Switch>
              </div>}
         </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser }) {
  return {
    loading: authedUser === null,
  }
}


export default connect(mapStateToProps)(App);
