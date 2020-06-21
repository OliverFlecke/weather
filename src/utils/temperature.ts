export function kelvinToCelsius(temperature: number): number {
	return temperature - 273.15;
}

export function kelvinToFahrenheit(temperature: number): number {
	return kelvinToCelsius(temperature) * 1.8 + 32;
}
