import React, { useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toWeekday } from '../commons/utils';
import Table from 'react-bootstrap/Table';
import { fetchWeatherDateEffect } from './Home/effects';
import Hour from '../components/Hour';


export const HourList = (props) => {

    const { match: { params: { locationId, year, month, day } } } = props
    const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
        hours: [],
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

    // console.log(
    //     !state.loading && (state.hours || []).map((hour) => {
    //         const fullDay = { ...hour, locationId, year, month, day }
    //         return (<div key={hour.id} hour={fullDay}></div>)
    //     })
    // );  

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
                        {!state.loading && (state.hours || []).map((data) => {
                            const fullDay = { ...data, locationId, year, month, day }
                            return (<Hour key={(data.created).slice(11,13)} data={fullDay} />)
                            
                        })}
                </tbody>
            </Table>
        </React.Fragment >
    )
}

export default HourList;