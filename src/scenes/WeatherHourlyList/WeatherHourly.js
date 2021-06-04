/* eslint-disable camelcase */
import React from 'react'

function WeatherHourly (props) {
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line react/prop-types
  const { hour, id, weather_state_name, min_temp, max_temp, humidity } = props
  return (
    <tr key={id}>
      <th>{hour}h</th>
      <th>{weather_state_name}</th>
      <th>{Math.round(min_temp)} °C</th>
      <th>{Math.round(max_temp)} °C</th>
      <th>{Math.round(humidity)}%</th>
    </tr>
  )
}
export default WeatherHourly
