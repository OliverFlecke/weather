import React from 'react';
import { CurrentWeather } from './components/CurrentWeather';

function App() {
	return (
		<div>
			<CurrentWeather location={'Copenhagen'} />
		</div>
	);
}

export default App;
