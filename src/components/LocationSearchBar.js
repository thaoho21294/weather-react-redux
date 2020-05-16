import React, { useReducer } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { searchLocationEffect } from '../effects';

export default function LocationSearchBar({ onSearch }) {

  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    foundLocation: undefined,
    loading: false,
    error: null,
  });

  async function onSubmit(event) {
    setState({ loading: true });
    event.preventDefault();
    const form = event.target;
    const locationString = form.elements.search.value;
    await searchLocationEffect(setState, onSearch, locationString);
  }

  return (
    <React.Fragment>
      <Form inline onSubmit={onSubmit}>
        <FormControl name="search" type="text" placeholder="Press Enter to search..." className="mr-sm-2" />
      </Form>
      { state.foundLocation && <div className="text-info">found: {state.foundLocation.title}</div> }
      { state.error && <div className="text-danger">{state.error}</div> }
      { state.loading && <div className="text-info">loading...</div> }
  </React.Fragment>
  )
}