import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getForCity, getForCoordinates, WeatherResponse } from '../api/openweather';
import { Datetime } from '../styles/common';
import { H2 } from '../styles/headers';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcons';

interface CurrentWeatherProps {
	location: string | Position;
}

export const CurrentWeather = ({ location }: CurrentWeatherProps) => {
	const [weather, setWeather] = useState<WeatherResponse | undefined>();

	useEffect(() => {
		async function getWeather() {
			if (typeof location === 'string') {
				setWeather(await getForCity(location));
			} else {
				setWeather(await getForCoordinates(location.coords.longitude, location.coords.latitude));
			}
		}

		getWeather();
	}, [setWeather, location]);

	if (!weather) {
		return null;
	}

	return (
		<Wrapper>
			<Header>
				<div>
					<H2>Current weather</H2>
					<Datetime>{new Date(weather.dt * 1000).toLocaleString()}</Datetime>
				</div>
				<WeatherIcon weather={weather.weather[0].main} size={38} />
			</Header>
			<div>{weather.name}</div>
			<Temperature value={weather.main.temp} unit={'celsius'} />
			<FeelsLike>
				Feels like <Temperature value={weather.main.feels_like} unit={'celsius'} />
			</FeelsLike>
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

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FeelsLike = styled.div`
	font-size: 0.8em;
`;
