import React, { useReducer, useEffect } from 'react';

import { fetchWeatherEffect } from '../commons/effects';
import { toWeekday } from '../commons/utils';

export default function DayList ({ locationId }) {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    days: [],
    loading: true,
    error: null,
    location: '',
  });

  useEffect(() => {
    setState({ loading: true })
    fetchWeatherEffect(setState, locationId);
  }, [locationId]);

  return (
    <React.Fragment>
    { state.location && <div className="text-info">Location: {state.location}</div> }
    <div className="days">
      {!state.loading && (state.days || []).map((day) => {
        return <div className="day" key={day.id}>
          <div className="dayName">{toWeekday(day.applicable_date)}</div>
          <div>{Math.round(day.min_temp)}</div>
          <div>{Math.round(day.max_temp)}</div>
        </div>
      })}
      { state.error && <div className="text-danger">{state.error}</div> }
      { state.loading && <div className="text-info">loading...</div> }
    </div>
  </React.Fragment>)
} 