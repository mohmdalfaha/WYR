import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
  trace:true
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store = createStore(
  reducer,
  composeEnhancers(
  middleware
  // other store enhancers if any
))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));


