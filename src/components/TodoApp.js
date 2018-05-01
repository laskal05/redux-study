import React, { Component } from 'react';

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return(
      <div>
        <button onClick={() => {
          store.dispatch({
            'type': 'ADD_TODO',
            'Test': 'Test',
            'id'  : nextTodoId++
          });
        }}>
          Add Todo
        </button>
      </div>
    );
  }
};

export default TodoApp;
