import React, { useState } from 'react';

import LocationSearchBar from './components/LocationSearchBar';
import DayList from './components/DayList';
import { defaultLocation } from '../../__mock__/mockData';
import {
  BrowserRouter as Router,Switch,
  Route,
} from "react-router-dom";
import Detail from '../Detail';


export default function Home() {
  const [locationId, setLocationId] = useState(defaultLocation.woeid);

  function onSearch(foundLocationId) {
    if (foundLocationId !== '') {
      setLocationId(foundLocationId)
    }
  }

  return (<div>
    <h3>Today Weather</h3>
    <section>
      <LocationSearchBar onSearch={onSearch} />
    </section>
    <section>
      <DayList locationId={locationId}></DayList>
    </section>
    <Router>
        <Switch>
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
  </div>)
}