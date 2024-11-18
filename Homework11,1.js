function logArguments(fn) {
  return function (...args) {
    console.log(`Arguments: ${args.join(', ')}`);
    return fn(...args);
  };
}


function add(a, b) {
  return a + b;
}

const loggedAdd = logArguments(add);
console.log(loggedAdd(3, 4));