import React, { useReducer, useEffect } from 'react';

import { fetchWeatherEffect } from '../effects';
import { toWeekday } from '../utils';

export default function DayList ({ location }) {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    days: [],
    loading: true,
    error: null,
    country: '',
  });

  useEffect(() => {
    fetchWeatherEffect(setState, location.woeid);
  }, [location]);

  return (
    <React.Fragment>
    { state.country && <div className="text-info">Country: {state.country}</div> }
    <div className="days">
      {(state.days || []).map((day) => {
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