import React, { Component } from 'react';

import TodoList from './TodoList';
import { getVisibleTodos } from '../../main';

class VisibleTodoList extends Component {

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount () {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = props;
    const state = this.props.store.getState();

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
