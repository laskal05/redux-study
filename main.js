import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import TodoApp from './src/components/';
import todoApp from './src/reducers/';

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
};

export const store = createStore(todoApp);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

