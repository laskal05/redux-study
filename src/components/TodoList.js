import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../containers/';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
