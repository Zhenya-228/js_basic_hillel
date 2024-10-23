function findPerfectNumbers(N) {
  for (let num = 2; num <= N; num++) {
      let sum = 0;
      for (let i = 1; i < num; i++) {
          if (num % i === 0) sum += i;
      }
      if (sum === num) console.log(num);
  }
}

findPerfectNumbers(10000);