import React from 'react';
import HourList from '../scenes/HourList';

export const Hour = ({ data }) => {
    console.log(data)
    const hourly = [new Date(`${data.created}`).getHours()];
    console.log(hourly);
    console.log(data.created);
    const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    console.log(hours);
    //const hourID = hours.map((hourly) => data.find((item) => item.hourly == 1));
    // console.log(hourID);
    // const dups = [];
    // const arr = data.filter(function (e) {
    //     // If it is not a duplicate, return true
    //     if (dups.indexOf(e.hourID) == -1) {
    //         dups.push(e.hourID);
    //         return true;
    //     }
    //     return false;
    // });
    // console.log(arr);
    return (
        <tr key={(((data.id)))}>
            <th>{hourly}h</th>
            <th>{data.weather_state_name}</th>
            <th>{Math.round(data.min_temp)} °C</th>
            <th>{Math.round(data.max_temp)} °C</th>
            <th>{Math.round(data.humidity)}%</th>
        </tr>
    )
}

export default Hour;