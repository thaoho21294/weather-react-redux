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

export async function fetchWeatherDateEffect(setState, woeid, date) {
  try {
    setState({ loading: true })
    const response = await getWeatherDate(woeid, date)
    setState({ weatherList: response });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}