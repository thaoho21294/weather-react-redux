export const locationUri = `/location`;

async function convertResponse(response) {
  const convertedResponse = await response.json();
  return convertedResponse.data;
}

export async function getWeather(woeid) {
  return convertResponse(await fetch(`${locationUri}/${woeid}`));
  
}

export async function searchLocation(locationString) {
  return convertResponse(await fetch(`${locationUri}/search/?query=${locationString}`));
  
}