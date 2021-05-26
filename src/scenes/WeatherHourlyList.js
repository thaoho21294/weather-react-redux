import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Hour from '../components/Hour';
import useFetchData from '../commons/useFetchData';
import { locationUri } from '../commons/utils';

/* Convert dayname from date */
/**
 * 
 * @param {String} dayNameString 
 */
const convertDateToDayName = (dayNameString) => {
    const [date, options] = [new Date(dayNameString), { weekday: 'long' }];
    return new Intl.DateTimeFormat('en-Us', options).format(date);
}

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

export const WeatherHourlyList = (props) => {
    const { match: { params: { locationId, year, month, day } } } = props

    const date = year + month + day
    const { data, loading, error } = useFetchData(`${locationUri}/${locationId}/${date}`, [], [locationId, date])


    let hours = [...new Set(data.map((weather) => new Date(weather.created).getHours()))]

    hours.sort((a, b) => a - b)

    const sortedWeatherList = hours.map((hour) => data.find((weather) => new Date(weather.created).getHours() == hour))

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
                    {sortedWeatherList.map((weather) => {
                        const fullDay = { ...weather, locationId, year, month, day }
                        return (<Hour data={fullDay} />)
                    })}
                </tbody>
            </Table>
            {error && <div className="text-danger">{error}</div>}
            {loading && <div className="text-info">loading...</div>}
        </React.Fragment >
    )
}

export default WeatherHourlyList;