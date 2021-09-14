import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/counter" component={Counter} />
			</BrowserRouter>
		</div>
	);
}

export default App;
