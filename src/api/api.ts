import { currentWeatherResponse } from './sample';

const apiKey = 'a9de9f43a51c3d8468834371a221c8f3';
const baseUrl = 'https://api.openweathermap.org';

type MainWeather =
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

export async function getForCity(city: string): Promise<WeatherResponse> {
	const query = new URL(baseUrl + '/data/2.5/weather');
	query.searchParams.append('appid', apiKey);
	query.searchParams.append('q', city);

	// const response = await fetch(query.toString());
	// const body = await response.json()

	return currentWeatherResponse;
}
