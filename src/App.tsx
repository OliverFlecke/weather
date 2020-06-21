import React, { useCallback, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { CurrentWeather } from './components/CurrentWeather';

function App() {
	const [position, setPositionState] = useState<Position | string | undefined>();

	const setPosition = useCallback((pos: Position) => {
		setPositionState(pos);
	}, []);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(setPosition, (err) => {
			console.error(err);
		});
	}, [setPosition]);

	if (!position) {
		return null;
	}

	return (
		<div>
			<GlobalStyles />
			<CurrentWeather location={position} />
		</div>
	);
}

export default App;

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Museo Moderno';
		src: url('MuseoModerno-Regular.tff');
	}

	body {
		margin: 0;
		font-family: 'Museo Moderno', 'Fira Sans', 'Segoe UI', sans-serif !important;
	}
`;
