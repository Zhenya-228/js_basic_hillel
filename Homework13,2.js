function findPalindrome(number) {
  let steps = 0;

  function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }

  function reverseAndAdd(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return num + reversed;
  }

  while (!isPalindrome(number)) {
    number = reverseAndAdd(number);
    steps++;
  }

  return {
    result: number,
    steps,
  };
}