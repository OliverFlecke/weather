import { currentWeatherResponse } from './sample';

const apiKey = 'a9de9f43a51c3d8468834371a221c8f3';
const baseUrl = 'https://api.openweathermap.org';

const currentWeatherPath = '/data/2.5/weather';

export async function getForCity(city: string): Promise<WeatherResponse> {
	const query = new URL(baseUrl + currentWeatherPath);
	query.searchParams.append('appid', apiKey);
	query.searchParams.append('q', city);

	// const response = await fetch(query.toString());
	// const body = await response.json()

	return currentWeatherResponse;
}

export async function getForCoordinates(lon: number, lat: number): Promise<WeatherResponse> {
	const query = new URL(baseUrl + currentWeatherPath);
	query.searchParams.append('appid', apiKey);
	query.searchParams.append('lat', lat.toString());
	query.searchParams.append('lon', lon.toString());

	// const response = await fetch(query.toString());
	// const body = await response.json();

	return currentWeatherResponse;
}

export type MainWeather =
	| 'Thunderstorm'
	| 'Drizzle'
	| 'Rain'
	| 'Snow'
	| 'Clear'
	| 'Clouds'
	| 'Mist'
	| 'Smoke'
	| 'Haze'
	| 'Dust'
	| 'Fog'
	| 'Sand'
	| 'Dust'
	| 'Ash'
	| 'Squall'
	| 'Tornado';

type Clouds = 'few clouds' | 'scattered cloads' | 'broken clouds' | 'overcast clouds';
type Clear = 'clear sky';
type Snow =
	| 'light snow'
	| 'Snow'
	| 'Heavy snow'
	| 'Sleet'
	| 'Light shower sleet'
	| 'Shower sleet'
	| 'Light rain and snow'
	| 'Rain and snow'
	| 'Light shower snow'
	| 'Shower snow'
	| 'Heavy shower snow';
type Rain =
	| 'light rain'
	| 'moderate rain'
	| 'heavy intensity rain'
	| 'very heavy rain'
	| 'extreme rain'
	| 'freezing rain'
	| 'light intensity shower rain'
	| 'shower rain'
	| 'heavy intensity shower rain'
	| 'ragged shower rain';
type Drizzle =
	| 'light intensity drizzle'
	| 'drizzle'
	| 'heavy intensity drizzle'
	| 'light intensity drizzle rain'
	| 'drizzle rain'
	| 'heavy intensity drizzle rain'
	| 'shower rain and drizzle'
	| 'heavy shower rain and drizzle'
	| 'shower drizzle';
type Thunderstrom =
	| 'thunderstorm with light rain'
	| 'thundrestorm with rain'
	| 'thunderstorm with heavy rain'
	| 'light thunderstorm'
	| 'thunderstorm'
	| 'heavy thunderstorm'
	| 'ragged thunderstorm'
	| 'thunderstorm with light drizzle'
	| 'thunderstorm with drizzle'
	| 'thunderstorm with heavy drizzle';

export type WeatherDescription = Clouds | Clear | Snow | Rain | Drizzle | Thunderstrom;

// See definition here: https://openweathermap.org/current
export interface WeatherResponse {
	coord: { lon: number; lat: number };
	weather: {
		id: number;
		main: MainWeather;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		// Default unit: Kelvin
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		humidity: number;
		pressure: number;
	};
	visibility: number;
	wind: {
		speed: number; // m/s
		deg: number; // meteorological direction
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}
