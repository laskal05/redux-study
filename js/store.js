const { createStore } = Redux;
const store = createStore(counter);

// getter
console.log(store.getState());

// dispatchすると、INCREMENTされる
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

// subscribe
store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

const render = () => {
  document.body.innerText = store.getState();
};
render();
