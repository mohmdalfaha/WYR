  import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import {HashRouter as Router, Route,Switch} from 'react-router-dom'

import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Header from './Header'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import NoPageFound from './NoPageFound'

class App extends Component {
  componentDidMount() {
    const AUTHED_USER = null
    this.props.dispatch(handleInitialData(AUTHED_USER))
  }
  render() {
    const {loading} = this.props
      return (
       <Router>
       <Fragment >
        <LoadingBar style={{background:'#007eff'}}/>
         <div className="list-container">
          {loading
            ? <Route path='/' component={LogIn}/>
            : <div>
                  <Header/>
                  <Switch>
                  <Route path='/'  exact component={Dashboard}/>
                  <Route path='/LeaderBoard' exact component={LeaderBoard}/>
                  <Route path='/QuestionPage/:id' exact component={QuestionPage}/>
                  <Route path='/add'exact component={NewQuestion}/>
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
