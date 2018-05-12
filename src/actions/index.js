const ADD_TODO = 'ADD_TODO';

export const AddTodoAction = (nextId, text) => ({
  'type': ADD_TODO,
  'id'  : nextId,
  'text': text
});
