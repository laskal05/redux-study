const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

/*
<<<<<

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

=====

*/

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

/*
>>>>>
*/

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  /*
  <<<<<
  document.body.innerText = store.getState();
  =====
  */
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();
