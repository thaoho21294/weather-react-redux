export const location_uri = `/location`;

export async function getWeather(woeid) {
  const response = await fetch(`${location_uri}/${woeid}`);
  const convertedResponse = await response.json();
  return convertedResponse.data;
}

export function searchLocation(locationString) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const foundLocations = locations.filter((location) => {
  //       return location.title.toLocaleLowerCase().includes(locationString.toLocaleLowerCase());
  //     })
  //     resolve(foundLocations);
  //   }, 1000)
  // });
  return fetch('/tasks');
}