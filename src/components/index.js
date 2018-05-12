import React, { Component } from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

const TodoApp = () => (
  <div>
    <AddTodo />
  </div>
);

    // <VisibleTodoList store={store} />
    // <Footer store={store} />
export default TodoApp;
