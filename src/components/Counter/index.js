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
				<button className="counter__button counter__button--increment" onClick={handeIncrement}>+</button>
				<button className="counter__button counter__button--decrement" onClick={handleDecrement}>-</button>
			</div>
		</div>
	);
};

export default Counter;