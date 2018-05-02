import React, { Component } from 'react';
import { store, getVisibleTodos } from '../../main';

let nextTodoId = 0;

const FilterLink = ({ filter, current, children }) => {
  if ( filter == current ) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={ e => {
      e.preventDefault();
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter   
      });
    }}>
      {children}
    </a>
  );
};

class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
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
            {visibleTodos.map(todo => 
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
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            current={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            current={visibilityFilter}
          >
            Active
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            current={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
};

export default TodoApp;
