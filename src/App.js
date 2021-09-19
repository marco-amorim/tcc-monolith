import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/counter" component={Counter} />
				<Route exact path="/todo-list" component={TodoList} />
			</BrowserRouter>
		</div>
	);
};

export default App;
