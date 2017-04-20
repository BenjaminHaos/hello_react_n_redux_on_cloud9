import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  // This mutates the list.
  // list.push(0);
  
  // So use this,
  // return list.concat([0]);
  
  // or this.
  return [...list, 0];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  
  // This makes the array object un-mutable.
  deepFreeze(listBefore);
  
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();

const removeCounter = (list, index) => {
  // These two lines do not pass tests because splice is a mutating method.
  //list.splice(index, 1);
  //return list;
  
  // SO use this instead.
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

testRemoveCounter();

const incrementCounter = (list, index) => {

  // Another mutation.
  //list[index]++;
  //return list;

  return [
    ...list.slice(0,index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter)
};

testIncrementCounter();

console.log('All tests passed');
