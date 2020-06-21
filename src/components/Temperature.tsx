import React, { useMemo } from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/temperature';
import { weatherCharacters } from '../utils/characters';
import styled from 'styled-components';

interface TemperatureProps {
	value: number;
	unit: 'kelvin' | 'celsius' | 'fahrenheit';
}

const Temperature = ({ value, unit }: TemperatureProps) => {
	const temperature = useMemo(() => {
		switch (unit) {
			case 'celsius':
				return kelvinToCelsius(value);
			case 'fahrenheit':
				return kelvinToFahrenheit(value);
			default:
				return value;
		}
	}, [value, unit]);

	return (
		<Wrapper>
			{temperature.toFixed(0)} {weatherCharacters[unit]}
		</Wrapper>
	);
};

export default Temperature;

const Wrapper = styled.span``;
