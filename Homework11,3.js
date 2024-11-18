function retry(fn, maxAttempts) {
    return function (...args) {
      let attempts = 0;
      let success = false;
      let result;
  
      while (attempts < maxAttempts && !success) {
        attempts++;
        const status = fn(...args); 
        if (status !== undefined && status !== null) { 
          success = true;
          result = status;
        }
      }
  
      return success ? result : `Failed after ${maxAttempts} attempts`;
    };
  }
  

  function unstableOperation(x) {
    const results = [null, undefined, x * 2];
    return results[x % results.length];
  }
  
  const retriedOperation = retry(unstableOperation, 5);
  console.log(retriedOperation(5)); 