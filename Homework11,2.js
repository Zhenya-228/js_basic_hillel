function validate(fn, validator) {
  return function (...args) {
    if (!validator(...args)) {
      return `Validation failed for arguments: ${args.join(', ')}`;
    }
    return fn(...args);
  };
}


function multiply(a, b) {
  return a * b;
}


const isNumberValidator = (...args) => args.every(arg => typeof arg === 'number');

const validatedMultiply = validate(multiply, isNumberValidator);
console.log(validatedMultiply(3, 4));
console.log(validatedMultiply(3, '4'));