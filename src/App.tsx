import React from 'react'
import './App.css'
import Login from './pages/Login/Login'
import HomePage from './pages/Home/HomePage'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
