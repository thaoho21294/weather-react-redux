import React, { useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toWeekday } from '../commons/utils';
import Table from 'react-bootstrap/Table';
import { fetchWeatherDateEffect } from './Home/effects';
import Hour from '../components/Hour';

export const WeatherHourlyList = (props) => {

    const { match: { params: { locationId, year, month, day } } } = props
    const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
        weatherList: [],
        days: '',
        loading: true,
        error: null
    });
    /**
     * Convert date '2021-05-19' to '2021/5/19' <Link to={`/detail/${locationId}/${convertDateToFlashDate(applicable_date)}`} >
     * @param {String} dateString 
     */

    const convertDateToFlashDate = (dateString) => {
        const d = new Date(dateString),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 1)
            month = '0' + month;
        if (day.length < 1)
            day = '0' + day;

        return [year, month, day].join('/');
    }

    let hours = [...new Set(state.weatherList.map((weather) => new Date(weather.created).getHours()))]

    hours.sort((a, b) => a - b)

    const sortedWeatherList = hours.map((hour) => state.weatherList.find((weather) => new Date(weather.created).getHours() == hour))

    /* Convert dayname from date */
    /**
     * 
     * @param {String} dayNameString 
     */
    const convertDateToDayName = (dayNameString) => {
        const [date, options] = [new Date(dayNameString), { weekday: 'long' }];
        return new Intl.DateTimeFormat('en-Us', options).format(date);
    }

    useEffect(() => {
        const date = year + month + day
        fetchWeatherDateEffect(setState, locationId, date);
    }, []);

    return (
        <React.Fragment>
            <h3>{convertDateToDayName(convertDateToFlashDate(`${year}/${month}/${day}`))}</h3>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Hourly</th>
                        <th>Weather State Name</th>
                        <th>Min Temp</th>
                        <th>Max Temp</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                        {!state.loading && (sortedWeatherList || []).map((weather) => {
                            const fullDay = { ...weather, locationId, year, month, day }
                            return (<Hour data={fullDay} />)
                            
                        })}
                </tbody>
            </Table>
        </React.Fragment >
    )
}

export default WeatherHourlyList;