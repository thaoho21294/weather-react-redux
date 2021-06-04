import { render, fireEvent, waitForElement } from '@testing-library/react'
import fetch from 'fetch-mock'
import React from 'react'

import LocationSearchBar from '../LocationSearchBar'
import { locationUri } from '../../services'
import { locations } from '../../../../__mock__/mockData'

/** This test case is failed because render not found the AutoComplete menu
 * I didn't find the solution
 * So it should be a idea of the unit test case for this component
 */
// eslint-disable-next-line no-undef
test('should display the location list when user input something', async () => {
  const typingValue = 'Ho'
  fetch.mock(`${locationUri}/search/?query=${typingValue}`, {
    status: 200,
    body: { data: locations }
  })

  const { getByText, getByPlaceholderText } = render(
    // eslint-disable-next-line no-undef
    <LocationSearchBar onSearch={jest.fn()} />
  )
  fireEvent.change(getByPlaceholderText(/Type location/i), {
    target: { value: typingValue }
  })

  await waitForElement(() => {
    for (const location of locations) {
      // eslint-disable-next-line no-undef
      expect(getByText(location.title)).toBeInTheDocument()
    }
  })
})
