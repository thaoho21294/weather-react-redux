import React from 'react'
import { render } from '@testing-library/react'
import Home from '../Home'

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(/Today Weather/i)
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument()
})

/**
 * This is the test case idea
 * We can't implement it because we can't find the menu list displayed in Search for now
 */
// eslint-disable-next-line no-undef
test('DayList should update if LocationSearchBar change search value', () => {
  // mock api /location/search/query=ho return a list location
  // mocke api /location/2165352 return Hong Kong weather data
  // fire input event on search bar
  // fire select event on displayed location list
  // find the location name text --> it should be the selected option
  // find the first div class min-temp --> it should be the new min temp
  // find the first div class max-temp --> it should be the new max temp
})
