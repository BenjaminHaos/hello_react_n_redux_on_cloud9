import {
  createStore
}
from 'redux';

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
// console.log(store.getState());  // 0


// These linws are used initially but the changed to the lines below.
/*
store.subscribe(() => {
  document.body.innerText = store.getState();
});
*/

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({
    type: 'INCREMENT'
  });
});
