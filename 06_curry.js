function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function addTwoNumbers(a, b) {
  return a + b;
}

const curriedAdd = curry(addTwoNumbers);

const result1 = curriedAdd(3)(4);
const result2 = curriedAdd(5, 6);

console.log('Result 1:', result1); 
console.log('Result 2:', result2); 
