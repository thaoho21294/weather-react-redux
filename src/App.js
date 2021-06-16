import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './scenes/Login/Welcome'
import './App.css'

function App () {
  return (
    <div className="welcome-background">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
