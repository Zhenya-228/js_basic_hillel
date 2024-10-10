function isYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("рік є високосним");
    } else {
      console.log("рік не є високосним");
    }
  }
  
let inputYear = prompt("Введіть рік:");
isYear(inputYear)