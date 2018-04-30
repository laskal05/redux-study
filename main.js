import { createStore, combineReducers } from 'redux';
// const { createStore, combineReducers } = Redux;
// const store = createStore(todos);

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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);

console.log('====== Current State ======');
console.log(store.getState());

store.dispatch({  
  type: 'ADD_TODO',
  id: '0',
  text: 'Learn Redux'
});
console.log('====== State after ADD_TODO ======');
console.log(store.getState());

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})

console.log('====== State after SET_VISIBILITY_FILTER ======');
console.log(store.getState());
console.log('All test passed!');