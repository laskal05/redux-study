import React, { Component } from 'react';
import { store, getVisibleTodos } from '../../main';

let nextTodoId = 0;

const FilterLink = ({
  filter,
  current,
  children,
  onClick
}) => {
  if ( filter == current ) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={e => {
      e.preventDefault();
      onClick(filter);
    }}>
      {children}
    </a>
  );
};

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => 
      <Todo
        key={todo.id}
        {...todo}
        onClick = {() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const AddTodo = ({
  onAddClick  
}) => {
  let input;
  return(
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        onAddClick(input.value);
        console.log(store.getState().todos);
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        current={visibilityFilter}
        onClick={onFilterClick}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        current={visibilityFilter}
        onClick={onFilterClick}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        current={visibilityFilter}
        onClick={onFilterClick}
      >
        Completed
      </FilterLink>
    </p>
  );
};

const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo
      onAddClick={text => {
        store.dispatch({
          'type': 'ADD_TODO',
          'id'  : nextTodoId++,
          text
        });
      }}
    />
    <TodoList
      todos={getVisibleTodos(
        todos,
        visibilityFilter
      )}
      onTodoClick={id => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        });
      }}
    />
    <Footer
      visibilityFilter={visibilityFilter} 
      onFilterClick={filter => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter   
        });
      }}
    />
  </div>
);

export default TodoApp;
