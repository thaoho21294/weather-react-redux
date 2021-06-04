import { render, waitForElementToBeRemoved } from '@testing-library/react'
import React from 'react'
import fetch from 'fetch-mock'

import { locationUri } from '../../services'
import DayList from '../DayList'
import { defaultLocation, weatherHCM } from '../../../../__mock__/mockData'
import { weekday } from '../../../../commons/utils'

// eslint-disable-next-line no-undef
test('should render all weekday and location title', async () => {
  const locationId = defaultLocation.woeid
  fetch.mock(`${locationUri}/${locationId}`, { status: 201, body: { data: weatherHCM } })

  const { getByText } = render(<DayList locationId={locationId}/>)
  await waitForElementToBeRemoved(() => getByText(/loading/i))

  // remove saturday because real data only have 6 days
  const actualWeekday = [...weekday]
  actualWeekday.splice(6, 1)
  for (const day of actualWeekday) {
    // eslint-disable-next-line no-undef
    expect(getByText(day)).toBeInTheDocument()
  }
  // eslint-disable-next-line no-undef
  expect(getByText(new RegExp(defaultLocation.title, 'i'))).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
test('should render error if there is a error', async () => {
  const errorMessage = 'Internal Server Error'
  fetch.mock(`${locationUri}/xyz`, { status: 500, throws: { message: errorMessage } })

  const { getByText } = render(<DayList locationId="xyz" />)
  await waitForElementToBeRemoved(() => getByText(/loading/i))

  // eslint-disable-next-line no-undef
  expect(getByText(errorMessage)).toBeInTheDocument()
})
