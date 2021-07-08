import React, { } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './scenes/Home/Home'
import WeatherHourlyList from './scenes/WeatherHourlyList/WeatherHourlyList'
import Login from './scenes/Login/Login'
import { getToken } from './useToken'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' component={Login} >
            {getToken() ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/' component={Home}>
            {getToken() ? <Home /> : <Redirect to='/login' />}
            <Route path='/login' component={Login}></Route>
          </Route>
          <Route path='/detail/:locationId/:year/:month/:day' component={WeatherHourlyList} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
