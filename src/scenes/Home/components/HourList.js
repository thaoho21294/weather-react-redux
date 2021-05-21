import React, { useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toWeekday } from '../../../commons/utils';
import Table from 'react-bootstrap/Table';
import { fetchWeatherDateEffect } from '../effects';


export const HourList = (props) => {

    const { match: { params: { locationId, date } } } = props

    const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
        hours: [],
        days: '',
        loading: true,
        error: null
    });
    console.log(locationId, date)

    /* Convert dayname from date */
    /**
     * 
     * @param {String} dayNameString 
     */
    const convertDateToDayName = (dayNameString) => {
        const [date, options] = [new Date(dayNameString), { weekday: 'long' }];
        return new Intl.DateTimeFormat('en-Us', options).format(date);
    }
    const {applicable_date } = props
    console.log(convertDateToDayName('2021-05-23'))
    console.log(convertDateToDayName(applicable_date))

    useEffect(() => {
        fetchWeatherDateEffect(setState, 'dayName');
    }, []);

    return (
        <React.Fragment>
            { state.days && <div className="text-info">Day: {state.days}</div>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Weather State Name</th>
                        <th>DateTime</th>
                        <th>Min Temp</th>
                        <th>Max Temp</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{date} </td>
                        <td> {convertDateToDayName(date)}</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>

    )
}

export default HourList;