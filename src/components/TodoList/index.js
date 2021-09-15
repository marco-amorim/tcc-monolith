import React, { useState } from 'react';
import './styles.css';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');

	const addTodo = (event) => {
		event.preventDefault();
		if (todo.trim()) {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	return (
		<div className="todo-list">
			<h1>Todo List</h1>
			<form onSubmit={addTodo}>
				<input
					type="text"
					value={todo}
					onChange={(event) => setTodo(event.target.value)}
				/>
				<button type="submit">Add Todo</button>
			</form>
			<ul>
				{todos.map((todo, index) => {
					return <li key={index}>{todo}</li>;
				})}
			</ul>
		</div>
	);
};

export default TodoList;
