import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LocationSearchBar from './components/LocationSearchBar'
import DayList from './components/DayList';
import { defaultLocation } from './mockData';

function App() {
  const [location, setLocation] = useState(defaultLocation);

  function onSearch(foundLocation) {
    if (foundLocation) {
      setLocation(foundLocation)
    }
  }

  return (
    <div className="App">
      <h3>This is the app with mock data, we have weather data of Ho Chi Minh, Houston and Phoenix</h3>
        <section>
          <LocationSearchBar onSearch={onSearch}/>
        </section>
        <section>
          <DayList location={location}></DayList>
        </section>
    </div>
  );
}

export default App;
