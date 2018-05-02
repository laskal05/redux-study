import React, { Component } from 'react';
import { store } from '../../main';

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return(
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            'type': 'ADD_TODO',
            'text': this.input.value,
            'id'  : nextTodoId++
          });
          console.log(store.getState().todos);
          this.input.value = '';
        }}>
          Add Todo
        </button>
        {
          <ul>
            {this.props.todos.map(todo => 
              <li key={todo.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  });
                  console.log(store.getState().todos);
                }}
                style={{
                  textDecoration:
                    todo.completed ?
                      'line-through' :
                      'none'
                }}
              >
                {todo.text}
              </li>
            )}
          </ul>
        }
      </div>
    );
  }
};

export default TodoApp;
