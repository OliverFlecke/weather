import React, { useEffect, useState } from 'react';
import { getForCity, WeatherResponse } from '../api/api';
import { weatherCharacters } from '../utils/characters';
import styled from 'styled-components';
import { H2 } from '../styles/headers';
import { Datetime } from '../styles/common';
import Temperature from './Temperature';

interface CurrentWeatherProps {
	location: string;
}

export const CurrentWeather = ({ location }: CurrentWeatherProps) => {
	const [weather, setWeather] = useState<WeatherResponse | undefined>();

	useEffect(() => {
		async function getWeather() {
			setWeather(await getForCity(location));
		}

		getWeather();
	}, [setWeather, location]);

	if (!weather) {
		return null;
	}

	return (
		<Wrapper>
			<H2>Current weather</H2>
			<Datetime>{new Date(weather.dt * 1000).toLocaleString()}</Datetime>
			<div>{weather.name}</div>
			<Temperature value={weather.main.temp} unit={'celsius'} />
			<div>
				Feels like <Temperature value={weather.main.feels_like} unit={'celsius'} />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border: 1px solid grey;
	border-radius: 5px;
	margin: 20px;
	padding: 6px;
	max-width: 400px;
`;
