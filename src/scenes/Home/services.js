export const locationUri = `/location`;
// export const detailUri = `/detail`;

async function convertResponse(response) {
  const convertedResponse = await response.json();
  return convertedResponse.data;
}
console.log();
export async function getWeather(woeid) {
  return convertResponse(await fetch(`${locationUri}/${woeid}`));
}

export async function searchLocation(locationString) {
  return convertResponse(await fetch(`${locationUri}/search/?query=${locationString}`));
}

export async function getWeatherDate(woeid, date){
  return convertResponse(await fetch(`${locationUri}/${woeid}/${date}`))
}

