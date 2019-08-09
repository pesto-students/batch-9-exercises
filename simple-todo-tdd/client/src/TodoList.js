import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
	render () {
		return (
			<ul>
				<Todo />
				<Todo />
				<Todo />
				<Todo />
			</ul>
		)
	}
}

export default TodoList;