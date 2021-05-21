import React from 'react';
import { HourList } from './Home/components/HourList';

export const Detail = (props) => {
    const { match } = props
    // locationID get from url, meterId là tên param, tương ứng với locationId
    // const [locationId, setLocationId] = useState(defaultLocation.woeid.date);
    // const LocationMeter = (props) => {
    //     const { match: { params: { locationId } } } = props ;
    // };
    
    // datetime

    // call api in useEffect

    // render list of consolidated_weather to table

    return (
        <div>
            <h3>Welcome to Detail Page</h3>
            <HourList match={match} />
        </div>
    )
}
export default Detail;
