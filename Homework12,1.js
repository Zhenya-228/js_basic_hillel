function summarize(num) {
  return function (arg = 1) {
    return num + arg;
  };
}
