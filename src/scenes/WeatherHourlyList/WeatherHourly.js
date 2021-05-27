import React from 'react';

export const WeatherHourly = (props) => {
    const { created, id, weather_state_name, min_temp, max_temp, humidity } = props
    const ihourly = new Date(`${created}`).getHours()
    return (
        <tr key={(((id)))}>
            <th>{ihourly}h</th>
            <th>{weather_state_name}</th>
            <th>{Math.round(min_temp)} °C</th>
            <th>{Math.round(max_temp)} °C</th>
            <th>{Math.round(humidity)}%</th>
        </tr>
    )
}

export default WeatherHourly;