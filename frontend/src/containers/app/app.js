import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '../home'
import css from './app.css'

export class App extends Component {
  render() {
    return (
      <Router>
        <div className={css.app}>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
