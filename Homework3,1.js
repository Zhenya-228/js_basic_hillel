function isNumber(num) {
    if (!(num % 3) && !(num % 5)) {
        console.log("FizzBuzz")
    } else if (!(num % 5)) {
        console.log("Buzz")
    } else if (!(num % 3)) {
        console.log("Fizz")
    }
}

let inputNum = prompt("Введіть цифру:");
isNumber(inputNum)