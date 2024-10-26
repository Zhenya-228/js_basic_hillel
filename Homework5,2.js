function isPalindrome(str) {
  
  const cleanStr = str.toLowerCase().trim();
  if (cleanStr === cleanStr.split('').reverse().join('')) {
    return "є"
  }
  return "не є"
}

const word = prompt("Ведіть слово")

console.log(`Слово ${word} ${isPalindrome(word)} паліндромом`)
