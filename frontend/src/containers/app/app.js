import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../home'
import Note from '../../components/Note'
import NotFound from '../../components/NotFound'
import css from './app.css'

export class App extends Component {
  render() {
    return (
      <Router>
        <div className={css.app}>
          <Switch>
            <Route exact path="/" component={Note} />
            <Route exact path="/auth" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
