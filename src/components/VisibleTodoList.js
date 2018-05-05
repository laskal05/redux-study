import React, { Component } from 'react';

import TodoList from './TodoList';
import { store, getVisibleTodos } from '../../main.js';

class VisibleTodoList extends Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount () {
    this.unsubscribe();
  }
  render() {
    const props = this.pros;
    const state = store.getState();

    return(
      <TodoList
        todos={getVisibleTodos(
          state.todos,
          state.visibilityFilter
        )}
        onTodoClick={(id) => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          });
        }}
      />
    );
  }
}

export default VisibleTodoList;
