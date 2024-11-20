function counter(startValue, step) {
  let currentValue = startValue;

  const func = function () {
    currentValue += step; 
    return currentValue;
  };

  func.increment = function () {
    currentValue += step;
    return currentValue;
  };

  func.decrement = function () {
    currentValue -= step;
    return currentValue;
  };

  func.reset = function () {
    currentValue = startValue;
    return currentValue;
  };

  return func;
}
