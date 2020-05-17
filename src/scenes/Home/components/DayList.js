import React, { useReducer, useEffect } from 'react';

import { fetchWeatherEffect } from '../effects';
import Day from '../../../components/Day';

export default function DayList ({ locationId }) {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    days: [],
    location: '',
    loading: true,
    error: null
  });

  useEffect(() => {
    fetchWeatherEffect(setState, locationId);
  }, [locationId]);

  return (
    <React.Fragment>
    { state.location && <div className="text-info">Location: {state.location}</div> }
    <div className="days">
      {!state.loading && (state.days || []).map((day) => { return <Day key={day.id} day={day} /> })}
      { state.error && <div className="text-danger">{state.error}</div> }
      { state.loading && <div className="text-info">loading...</div> }
    </div>
  </React.Fragment>)
} 