function doubleLetter(str) {
    str = str.split("")
    new_str = []
    for (let i of str) {
        new_str.push(i + i)
    }
    return new_str.join("")
}

console.log(doubleLetter(prompt("Ведіть слово")))