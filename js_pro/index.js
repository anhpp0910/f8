// IIFE

const app = (function () {
  // Private
  const cars = [];
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();

function createCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
}

const counter1 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
