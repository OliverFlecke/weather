import React, { useState, useEffect, useCallback } from 'react';
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
			<CurrentWeather location={position} />
		</div>
	);
}

export default App;
