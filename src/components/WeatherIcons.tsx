import React from 'react';
import { IoMdSunny, IoMdCloudy, IoMdRainy, IoMdThunderstorm, IoMdSnow, IoMdPartlySunny } from 'react-icons/io';
import { MainWeather, WeatherDescription } from '../api/openweather';

export const Sunny = () => {
	return <IoMdSunny />;
};

interface WeatherIconProps {
	weather: MainWeather;
	details?: WeatherDescription;
	size?: number;
	color?: string;
}

const WeatherIcon = (props: WeatherIconProps) => {
	const { weather } = props;
	switch (weather) {
		case 'Clear':
			return <IoMdSunny {...props} />;
		case 'Clouds':
			if (props.details) {
				switch (props.details) {
					case 'few clouds':
					case 'scattered cloads':
						return <IoMdPartlySunny {...props} />;
				}
			}
			return <IoMdCloudy {...props} />;
		case 'Drizzle':
		case 'Rain':
			return <IoMdRainy {...props} />;
		case 'Snow':
			return <IoMdSnow {...props} />;
		case 'Thunderstorm':
			return <IoMdThunderstorm {...props} />;

		default:
			return null;
	}
};

export default WeatherIcon;
