import { getWeather, searchLocation, getWeatherDate } from './services';

export async function fetchWeatherEffect(setState, location) {
  try {
    setState({ loading: true })
    const response = await getWeather(location);
    setState({ days: response.consolidated_weather, location: response.title });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function searchLocationEffect(setState, locationString) {
  try {
    setState({ loading: true });
    const response = await searchLocation(locationString);
    setState({ foundLocations: response });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function fetchWeatherDateEffect(setState, day) {
  try {
    setState({ loading: true })
    const woeid = '44418';
    const year = '2021';
    const month = '05';
    const day = '20';
    const response = await getWeatherDate(woeid, year, month, day)
    setState({ hours: response });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}