import React from 'react';
import { connect } from 'react-redux';

import { AddTodoAction } from '../actions/';

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
        dispatch(AddTodoAction(
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

AddTodo = connect(
  null,
  null
)(AddTodo);

export default AddTodo;
