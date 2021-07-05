import React, {} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './scenes/Home/Home'
import WeatherHourlyList from './scenes/WeatherHourlyList/WeatherHourlyList'
import Login from './scenes/Login/Login'
import PrivateLoginRoute from './components/PrivateLoginRoute'
import PrivateHomeRoute from './components/PrivateHomeRoute'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <PrivateHomeRoute exact path='/' component={Home} />
          <PrivateLoginRoute exact path='/login' component={Login }/>
          <Route exact path='/login' component={Login }/>
          <Route exact path='/detail/:locationId/:year/:month/:day' component={WeatherHourlyList} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
