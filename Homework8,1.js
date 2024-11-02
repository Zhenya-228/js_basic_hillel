const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(words) {
    return words.map(currentItem => currentItem[0].toUpperCase() + currentItem.slice(1).toLowerCase())
       
}

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]z