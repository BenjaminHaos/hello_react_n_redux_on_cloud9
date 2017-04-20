import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  
  // These two line mutate the toDo object.
  //todo.completed = !todo.completed;
  //return todo;
  
  // This works, but requires change if there are ever new properties added to the object.
  /*
  return {
    id: todo.id,
    text: todo.text,
    completed: !todo.completed
  };
  */

  // This works although the .assign() method is new to ES6 and might not be supported in some browsers.
  /*
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
  */

  // This also works and the spread operator is fairly popular. Still it is not supported in some browsers.
  // info : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Browser_compatibility
  return {
    ...todo,
    completed: !todo.completed
  };
  /*
  */
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();

console.log('All tests passed');
