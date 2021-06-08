import React from 'react'
import PropTypes from 'prop-types'

const WeatherHourly = (props) => {
  const { hour, id, weather_state_name: weatherStateName, min_temp: minTemp, max_temp: maxTemp, humidity } = props
  return (
    <tr key={id}>
      <th>{hour}h</th>
      <th>{weatherStateName}</th>
      <th>{Math.round(minTemp)} °C</th>
      <th>{Math.round(maxTemp)} °C</th>
      <th>{Math.round(humidity)}%</th>
    </tr>
  )
}

WeatherHourly.propTypes = {
  hour: PropTypes.string,
  id: PropTypes.number,
  weather_state_name: PropTypes.string,
  min_temp: PropTypes.number,
  max_temp: PropTypes.number,
  humidity: PropTypes.number
}

export default WeatherHourly
