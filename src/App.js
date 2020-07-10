import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addTodo,
	completeTodo,
	setVisibilityFilter,
	visibilityFilters,
} from './actions';

const getFilteredTodos = (todos, selectedFilter) => {
	switch(selectedFilter) {
		case visibilityFilters.SHOW_COMPLETE:
			return todos.filter(todo => todo.completed);
		case visibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
		default:
			return todos;
	}
};
const parseFilterName = (filter) => {
	return filter.split('_')
		.map((word, index) => {
			return (index === 0) 
				? `${word.charAt(0)}${word.slice(1).toLowerCase()} `
				: `${word.toLowerCase()}`
		})
};
function App() {
	const [value, setInputValue] = useState('');
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);
	const selectedFilter = useSelector(state => state.visibilityFilter);
	let filteredsTodos = getFilteredTodos(todos, selectedFilter);
	const addNewTask = (value) => {
		if(value.length > 3) {
			dispatch(addTodo(value));
			setInputValue('');
		}
		
	};
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-9 col-sm-9 col-md-6">
					<h2 className="display-5 mt-3">Notes with Redux</h2>
					<hr />
					<div className="input-group mt-3">
						<input 
							id="newTask" 
							className="form-control" 
							type="text" 
							placeholder="Add a new task..."
							value={value}
							onChange={e => setInputValue(e.target.value)}
							onKeyDown={(e) => {
								if(e.key === 'Enter') {
									addNewTask(value);
								}
							}}
						></input>
						<div>
							<button 
								className="btn btn-outline-success" 
								onClick={() => {
									addNewTask(value);
								}}
							>
								add task
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-9 col-sm-9 col-md-6">
					<div className="input-group mt-3">
						<select onChange={(e) => {
							dispatch(setVisibilityFilter(e.currentTarget.value))
							}}
							className="custom-select"
						>
						{
							Object.values(visibilityFilters)
								.map((filter, index) => 
									<option 
										key={index}
										value={filter}
									>
										{ 
											parseFilterName(filter)
										}
									</option>
								)
						}
						</select>								
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-9 col-sm-9 col-md-6">
						{filteredsTodos.length > 0 &&
							<ul className="list-group mt-3">
								{filteredsTodos.map((todo) => 
									<li 
										className="list-group-item d-flex justify-content-between align-items-center" 
										key={todo.id}
									>
										{todo.text}
										{!todo.completed &&
											<button 
												className="btn btn-outline-primary" 
												onClick={() => {
													dispatch(completeTodo(todo.id))
												}}>
													Done
											</button>
										}
									</li>
								)}
							</ul>
						}
					</div>
				</div>
		</div>
	);
}
export default App;
