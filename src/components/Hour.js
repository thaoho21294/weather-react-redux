import React from 'react';

export const Hour = ({ data }) => {
    const ihourly = new Date(`${data.created}`).getHours()
    return (
        <tr key={(((data.id)))}>
            <th>{ihourly}h</th>
            <th>{data.weather_state_name}</th>
            <th>{Math.round(data.min_temp)} °C</th>
            <th>{Math.round(data.max_temp)} °C</th>
            <th>{Math.round(data.humidity)}%</th>
        </tr>
    )
}

export default Hour;