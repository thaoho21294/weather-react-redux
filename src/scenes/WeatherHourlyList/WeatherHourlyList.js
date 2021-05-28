import React, { useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import WeatherHourly from './WeatherHourly';
import useFetchData from '../../commons/useFetchData';
import { locationUri } from '../../commons/utils';

/**
 * Convert date to weekday
 * @param {String} dateString ex:2021/05/27
 * @returns {String} weekday
 */
const convertDateToDayName = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-Us', { weekday: 'long' }).format(date)
}

export const WeatherHourlyList = (props) => {
    const { match: { params: { locationId, year, month, day } } } = props
    const date = year + month + day
    const { data: weatherList, loading, error } = useFetchData(`${locationUri}/${locationId}/${date}`, [], [locationId, date])
    
    const sortedWeatherList = useMemo(() => {
        const hours = [...new Set(weatherList.map((weather) => new Date(weather.created).getHours()))]
        hours.sort((a, b) => a - b)
        // return hours.map((hour) => {
        //     const foundWeather = weatherList.find((weather) => new Date(weather.created).getHours() == hour)
        //     foundWeather.ihourly = hour
        //     return foundWeather
        // })
        return hours.map((hour) => ({...weatherList.find((weather) => new Date(weather.created).getHours() == hour), hour }))
    }, [weatherList])

    return (
        <React.Fragment>
            <h3>{convertDateToDayName(`${year}/${month}/${day}`)}</h3>
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
                    {sortedWeatherList.map((weather) => {
                        return <WeatherHourly {...weather} />
                    })}
                </tbody>
            </Table>
            {error && <div className="text-danger">{error}</div>}
            {loading && <div className="text-info">loading...</div>}
        </React.Fragment >
    )
}

export default WeatherHourlyList;