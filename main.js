import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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
//   <Provider store={createStore(todoApp)}>
//     <TodoApp />
//   </Provider>,

ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById('root')
);

