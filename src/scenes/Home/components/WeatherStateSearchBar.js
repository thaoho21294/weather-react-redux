import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

const WeatherStateSearchBar = (props) => {
  const { handleSearch } = props
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
    handleSearch(e.target.value)
  }
  return (
    <FormControl
      name='search'
      type='text'
      placeholder='Type weather state name ...'
      className='mr-sm-2'
      value={text}
      onChange={onChange}
    />
  )
}

WeatherStateSearchBar.propTypes = {
  handleSearch: PropTypes.string
}

export default WeatherStateSearchBar
