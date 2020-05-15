import { getWeather, searchLocation } from './services';

export async function fetchWeatherEffect(setState, location) {
  try {
    const response = await getWeather(location);
    setState({ days: response.consolidated_weather, country: response.title });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function searchLocationEffect(setState, onSearch, locationString) {
  try {
    const response = await searchLocation(locationString);
    setState({ foundLocation: response[0] });
    onSearch(response[0]);
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}
