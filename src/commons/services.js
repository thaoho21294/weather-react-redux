export const location_uri = `/location`;

async function convertResponse(response) {
  const convertedResponse = await response.json();
  return convertedResponse.data;
}

export async function getWeather(woeid) {
  return convertResponse(await fetch(`${location_uri}/${woeid}`));
  
}

export async function searchLocation(locationString) {
  return convertResponse(await fetch(`${location_uri}/search/?query=${locationString}`));
  
}