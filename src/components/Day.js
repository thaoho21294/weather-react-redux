import React from 'react';
import { toWeekday } from '../commons/utils';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from "react-router-dom";


export default function Day({ day }) {
  return (
    <Link to="/detail" >
      <div className="day" key={day.id}>
        <div className="dayName">{toWeekday(day.applicable_date)}</div>
        <div className="min-temp">{Math.round(day.min_temp)}</div>
        <div className="max-temp">{Math.round(day.max_temp)}</div>
      </div>
    </Link>
  )
}
