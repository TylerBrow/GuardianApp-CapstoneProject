import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Test from './actiontest'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' component={Test} />
        <h1>Hello World</h1>
        </Router>
      </Provider>
    )
  }
}

export default App
