import React from 'react';

import * as Action from '../actions/';

let nextTodoId = 0;

let AddTodo = ({
  dispatch
}) => {
  let input;

  return(
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        if(input.value == '') {
          return;
        }
        dispatch(Action.addTodo(
          nextTodoId++,
          input.value
        ));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
