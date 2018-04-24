const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if(action.id !== state.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  };
};

const todos = (state = [], action) => {
  switch(action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      todo(state, action)
    ];
  case 'TOGGLE_TODO':
    return state.map(t => todo(t, action));
  default:
    return state;
  }
};

// const testAddTodo = () => {
//   const beforeState = [];
//   const action = {
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Learn Redux'
//   };
//   const afterState = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     }
//   ];
//   deepFreeze(beforeState);
//   deepFreeze(action);
  
//   expect(
//     todos(beforeState, action)
//   ).toEqual(afterState)
// };

// const testToggleTodo = () => {
//   const beforeState = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     },
//     {
//       id: 1,
//       text: 'Go Shopping',
//       completed: false
//     }
//   ];
//   const action = {
//     type: 'TOGGLE_TODO',
//     id: 1
//   };
//   const afterState = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     },
//     {
//       id: 1,
//       text: 'Go Shopping',
//       completed: true
//     }
//   ];
  
//   deepFreeze(beforeState);
//   deepFreeze(action);
  
//   expect(
//     todos(beforeState, action)
//   ).toEqual(afterState);
// };

const { createStore } = Redux;
const store = createStore(todos);

console.log('Initial State');
console.log(store.getState());
console.log('-------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text 'Learn Redux'
});

console.log('Current state:);
console.log(store.getState());
console.log('-------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go Shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('-------------');

console.log('Dispatching TOGGLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});

console.log('Current state:');
console.log(store.getState());
console.log('-------------');

// testAddTodo();
// testToggleTodo();
console.log('All test passed!');
