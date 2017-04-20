import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

// Counter Component or DOM component
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (  // Callbacks so that the Redux dependency is not hard-coded into the component. 
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

// Root Comonent
const render = () => {
  
  ReactDOM.render(
    <Counter
      value={store.getState()} // Specify that its value should be taken from the Redux Store current state
      onIncrement={() => // Dispatch action to the Redux Store.
        store.dispatch({
          type: 'INCREMENT'           
        })            
      }
      onDecrement={() => // Dispatch action to the Redux Store.
        store.dispatch({
          type: 'DECREMENT'           
        })            
      }
    />,
    document.getElementById('root')
  );
}

store.subscribe(render); // subscribe to the Redux Store, so our render function runs anytime the state changes, so the counter gets the current state.
render();
