import React, { useState } from 'react';
import './styles.css';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handleDecrement = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};
	const handeIncrement = () => {
		setCounter(counter + 1);
	};

	return (
		<div className="app">
			<div className="counter">
				<h1>Counter: {counter}</h1>
				<button className="increment" onClick={handeIncrement}>+</button>
				<button className="decrement" onClick={handleDecrement}>-</button>
			</div>
		</div>
	);
};

export default Counter;