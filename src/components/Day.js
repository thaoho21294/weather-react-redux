import React from 'react';
import { toWeekday } from '../commons/utils';

export default function Day({ day }) {
  return (<div className="day" key={day.id}>
  <div className="dayName">{toWeekday(day.applicable_date)}</div>
  <div className="min-temp">{Math.round(day.min_temp)}</div>
  <div className="max-temp">{Math.round(day.max_temp)}</div>
</div>)
}