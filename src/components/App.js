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
    this.props.dispatch(handleInitialData())
  }
  render() {
      return (
       <Router>
        <Fragment>
        <LoadingBar style={{background:'#007eff'}}/>
         <div className="list-container">
          {this.props.loading === true
            ? null
            : <div>
                <Switch>
                  <Route path='/' exact component={LogIn}/>
                  <Route path='/Dashboard'  component={Dashboard}/>
                  <Route path='/LeaderBoard' component={LeaderBoard}/>
                  <Route path='/QuestionPage/:id' component={QuestionPage}/>
                  <Route path='/NewQuestion' component={NewQuestion}/>
                  <Route path='/UserStat' component={UserStat}/>
                  <Route render={()=> <NoPageFound/>
                  }/>
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
