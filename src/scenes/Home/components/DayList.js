import React from 'react'
import Day from '../../../components/Day'
import useFetchData from '../../../commons/useFetchData'
import { locationUri } from '../../../commons/utils'
import PropTypes from 'prop-types'

const DayList = ({ locationId }) => {
  const { data, loading, error } = useFetchData(`${locationUri}/${locationId}`, { consolidated_weather: [], title: '' }, [locationId])

  return (
    <React.Fragment>
      <div className="text-info">Location: {data.title}</div>
      <div className="days">
        {!loading && data.consolidated_weather.map((day) => {
          const fullDay = { ...day, locationId }
          return <Day key={day.id} day={fullDay} />
        })}
        {error && <div className="text-danger"> {error} </div>}
        {loading && <div className="text-info">loading...</div>}
      </div>
    </React.Fragment>
  )
}

DayList.propTypes = {
  locationId: PropTypes.string
}

export default DayList
