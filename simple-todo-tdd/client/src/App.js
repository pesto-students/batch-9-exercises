import React from 'react';

import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => (
  <React.Fragment>
    <AddTodo />
    <TodoList />
  </React.Fragment>
);

export default App;
