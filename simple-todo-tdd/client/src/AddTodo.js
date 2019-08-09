import React, { Component } from 'react';

class AddTodo extends Component {
	render() {
		return (
			<form onSubmit={(event) => {
				event.preventDefault();
				console.log("Submitted")
			}}>
				<input type="text" />
				<button type="submit" >Add</button>
			</form>
		);
	}
}

export default AddTodo;