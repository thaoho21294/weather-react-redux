import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './scenes/Home/Home'
import WeatherHourlyList from './scenes/WeatherHourlyList/WeatherHourlyList'
import Login from './scenes/Login/Login'

function App () {
  const [foundUser, setFoundUser] = useState()
  if (!foundUser) {
    return <Login setFoundUser={setFoundUser} />
  }
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/detail/:locationId/:year/:month/:day' component={WeatherHourlyList} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
