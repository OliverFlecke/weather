import { WeatherResponse } from './api';

export const currentWeatherResponse: WeatherResponse = {
	coord: {
		lon: 12.57,
		lat: 55.68,
	},
	weather: [
		{
			id: 803,
			main: 'Clouds',
			description: 'broken clouds',
			icon: '04d',
		},
	],
	base: 'stations',
	main: {
		temp: 292.11,
		feels_like: 291.15,
		temp_min: 291.15,
		temp_max: 293.15,
		pressure: 1018,
		humidity: 77,
	},
	visibility: 10000,
	wind: {
		speed: 3.6,
		deg: 360,
	},
	clouds: {
		all: 81,
	},
	dt: 1592762089,
	sys: {
		type: 1,
		id: 1575,
		country: 'DK',
		sunrise: 1592706323,
		sunset: 1592769461,
	},
	timezone: 7200,
	id: 2618425,
	name: 'Copenhagen',
	cod: 200,
};
