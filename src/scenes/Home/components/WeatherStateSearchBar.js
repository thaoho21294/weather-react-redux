import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'

export default function WeatherStateSearchBar (props) {
  // eslint-disable-next-line react/prop-types
  const { handleSearch } = props
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
    handleSearch(e.target.value)
    console.log('aaa', e.target.value)
  }

  return (
    <FormControl
      name="search"
      type="text"
      placeholder="Type weather state name ..."
      className="mr-sm-2"
      value={text}
      onChange={onChange}
    />
  )
}
