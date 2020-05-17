import React, { useReducer } from 'react';
import { FormControl } from 'react-bootstrap';
import Autocomplete from 'react-autocomplete';
import { searchLocationEffect } from '../effects';

export default function LocationSearchBar({ onSearch }) {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    foundLocations: [],
    selectedLocationName: '',
    loading: false,
    error: null,
  });

  async function onChange(e) {
    const locationString = e.target.value;
    setState({ selectedLocationName: locationString });
    if(locationString !== '') {
      await searchLocationEffect(setState, locationString);
    }
  }

  function onSelect(title) {
    setState({ selectedLocationName: title });
    // the AutoComplete doesn't export any function to get item properties that don't display
    // so we need to find item by displayed value
    const selectedLocation = state.foundLocations.find((location) => {
      return location.title === title;
    })
    onSearch(selectedLocation.woeid);
  }

  return (
    <React.Fragment>
      <Autocomplete
        items={state.foundLocations}
        getItemValue={item => item.title}
        renderInput={(props) => {
          return <FormControl name="search" type="text" placeholder="Type location..." className="mr-sm-2" {...props}/>
        }}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.title}
          </div>
        }
        value={state.selectedLocationName}
        onChange={onChange}
        onSelect={onSelect}
      />
      { state.error && <span className="text-danger">{state.error}</span> }
      { state.loading && <span className="text-info">loading...</span> }
  </React.Fragment>
  )
}