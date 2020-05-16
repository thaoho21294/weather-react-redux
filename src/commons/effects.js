import { getWeather, searchLocation } from './services';

export async function fetchWeatherEffect(setState, location) {
  try {
    const response = await getWeather(location);
    setState({ days: response.consolidated_weather, location: response.title });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function searchLocationEffect(setState, locationString) {
  try {
    const response = await searchLocation(locationString);
    setState({ foundLocations: response });
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}
