import React from 'react'
import { Link } from 'react-router-dom'
import { toWeekday } from '../commons/utils'
import PropTypes from 'prop-types'

/**
 * Convert date '2021-05-19' to '2021/5/19'
 * @param {String} dateString
 */

const convertDateToFlashDate = (dateString) => {
  const d = new Date(dateString)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('/')
}

const Day = ({ day }) => {
  const { locationId } = day
  return (
    <Link to={`/detail/${locationId}/${convertDateToFlashDate((day.applicable_date))}`}>
      <div className="day" key={day.id}>
        <div className="dayName">{toWeekday(day.applicable_date)}</div>
        <div className="min-temp">{Math.round(day.min_temp)}</div>
        <div className="max-temp">{Math.round(day.max_temp)}</div>
      </div>
    </Link>
  )
}

Day.propTypes = {
  day: PropTypes.shape({
    locationId: PropTypes.string,
    applicable_date: PropTypes.string,
    id: PropTypes.number,
    min_temp: PropTypes.number,
    max_temp: PropTypes.number
  })
}

export default Day
