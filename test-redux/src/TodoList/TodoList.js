import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';

class TodoList extends Component {
  propTypes = {
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired })).isRequired,
  }

  state = {
    input: '',
  };

  onHandleChange = this.onHandleChange.bind(this);
  onHandleClickAdd = this.onHandleClickAdd.bind(this);
  onHandleClickRemove = this.onHandleClickRemove.bind(this);

  onHandleChange({ currentTarget: { value } }) {
    this.setState({ input: value });
  }

  onHandleClickAdd() {
    const { input } = this.state;
    this.props.addTodo({ text: input });
  }

  onHandleClickRemove(index) {
    this.props.removeTodo(index);
  }

  render() {
    const todoList = this.props.todos.map((todo, index) => {
      return (
        <li key={todo.text} onClick={() => this.onHandleClickRemove(index)}>
          {todo.text}
        </li>
      );
    });
    return (
      <div className="todos--container">
        <h1 className="todos--h1">Todos</h1>
        <input type="text" placeholder="Enter Todo" value={this.state.input} onChange={this.onHandleChange} />
        <ul>
          {todoList}
        </ul>
        <button className="todo--button" type="button" onClick={this.onHandleClickAdd} >Add Todo</button>
      </div>
    );
  }
}

export default TodoList;
