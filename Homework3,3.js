function getYearWord(age) {
    if (age % 10 === 1 && age % 100 !== 11) {
      return "рік";
    } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
      return "роки";
    } else {
      return "років";
    }
}

let inputAge = prompt("Введіть ваш вік:");
console.log(`Вам ${inputAge} ${getYearWord(inputAge)}.`)