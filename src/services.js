import { weatherHCM, weatherHouston, weatherPhoneix, locations } from './mockData';

export const weather_uri = `/location`;

export function getWeather(location) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(location === 2424766) {
          resolve(weatherHouston)
        } else if(location === 2471390) {
          resolve(weatherPhoneix);
        } else {
          resolve(weatherHCM);
        }
      }, 1000)
  });
  // return fetch(`${weather_uri}/${location}`, { method: 'GET' });
}

export function searchLocation(locationString) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundLocations = locations.filter((location) => {
        return location.title.toLocaleLowerCase().includes(locationString.toLocaleLowerCase());
      })
      resolve(foundLocations);
    }, 1000)
  });
}