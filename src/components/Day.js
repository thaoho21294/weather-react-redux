import React from 'react';
import { toWeekday } from '../commons/utils';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from "react-router-dom";


/**
 * Convert date '2021-05-19' to '2021/5/19' <Link to={`/detail/${locationId}/${convertDateToFlashDate(applicable_date)}`} >
 * @param {String} dateString 
 */

const convertDateToFlashDate = (dateString) => {
  let d = new Date(dateString),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('/');
}

export const Day = ({ day }) => {
  const { locationId, applicable_date } = day
  console.log((convertDateToFlashDate(applicable_date)));
  return (
    <Link to={`/detail/${locationId}/${convertDateToFlashDate(applicable_date)}`} >
      <div className="day" key={day.id}>
        <div className="dayName">{toWeekday(day.applicable_date)}</div>
        <div className="min-temp">{Math.round(day.min_temp)}</div>
        <div className="max-temp">{Math.round(day.max_temp)}</div>
      </div>
    </Link>
  )
}

export default Day;