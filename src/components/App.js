import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
//import Header from './Header'   //adding header here causes undefined bugs
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import UserStat from './UserStat'
import NoPageFound from './NoPageFound'

class App extends Component {
  componentDidMount() {
    const AUTHED_USER = null
    this.props.dispatch(handleInitialData(AUTHED_USER))
  }
  render() {
      const {authedUser} = this.props

      return (
       <Router>
        <Fragment>
        <LoadingBar style={{background:'#007eff'}}/>
         <div className="list-container">
         <Switch>
          {authedUser === null
            ? <Route path='/' exact component={LogIn}/>
            : <Fragment>
                  <Route path='/'  exact component={Dashboard}/>
                  <Route path='/LeaderBoard' exact component={LeaderBoard}/>
                  <Route path='/QuestionPage/:id' exact component={QuestionPage}/>
                  <Route path='/NewQuestion'exact component={NewQuestion}/>
                  <Route path='/UserStat'exact component={UserStat}/>
               </Fragment>}
                  <Route render={()=> <NoPageFound/>}/>
               </Switch>
         </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser }) {
  return {
    //loading: authedUser === null,
    authedUser
  }
}


export default connect(mapStateToProps)(App);
