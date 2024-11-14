function memoize(fn, N) {
  const cache = new Map();

  return function (...args) {
    const key = args.join('_');

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);

    if (cache.size >= N) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    cache.set(key, result);
    return result;
  };
}


function slowFunction(x) {
  console.log(`Calculating for ${x}`);
  return x * 2;
}


const memoizedFunction = memoize(slowFunction, 3);

console.log(memoizedFunction(1)); 
console.log(memoizedFunction(1)); 
console.log(memoizedFunction(3));
console.log(memoizedFunction(4)); 
console.log(memoizedFunction(1)); 