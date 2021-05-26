import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './scenes/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WeatherHourlyList from './scenes/WeatherHourlyList';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:locationId/:year/:month/:day" component={WeatherHourlyList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
