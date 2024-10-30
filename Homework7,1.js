const originalArray = [1, 2, 3, 4, 5];

function reversedArray (arr){
    return arr.slice().reverse();
}

console.log(reversedArray(originalArray)); // [5, 4, 3, 2, 1]