function padString(str, length, symbol, toLeft = false) {
    length_symbol = length - str.length
    if (length_symbol > 0) {
      if (!toLeft) {
        str = str + symbol.repeat(length_symbol)
      } else {
        str = symbol.repeat(length_symbol) + str
      }
      
    }
    return str
}




console.log(padString("erere", 9, "#", true))
console.log(padString("tuggl", 7, "%", false))
