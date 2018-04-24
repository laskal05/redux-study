const addCounter = (list) => {
  // <<<<<
  // return list.push(0);
  // =====
  return [...list, 0];
  // >>>>>
};

const removeCounter = (list, index) => {
  // <<<<<
  // return list.splice(1);
  // =====
  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index+1));
  // =====
  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ];
  // >>>>>
};

const incrementCounter = (list, index) => {
  // <<<<<
  // return list[index]++;
  // =====
  // return list
  //         .slice(0, index)
  //         .concat(list[index]+1)
  //         .concat(list.slice(index+1))
  // =====
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index+1)
  ];
  // >>>>>
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  Object.freeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  Object.freeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testRemoveCounter();

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  Object.freeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testIncrementCounter();
console.log('All tests passed!');
