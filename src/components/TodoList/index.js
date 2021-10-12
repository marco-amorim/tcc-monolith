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
			<form onSubmit={addTodo} className="todo-list__form">
				<input
					type="text"
					className="todo-list__input"
					value={todo}
					onChange={(event) => setTodo(event.target.value)}
				/>
				<button className="todo-list__button" type="submit">
					Add Todo
				</button>
			</form>
			<ul className="todo-list__list">
				{todos.map((todo, index) => {
					return <li key={index}>{todo}</li>;
				})}
			</ul>
		</div>
	);
};

export default TodoList;
