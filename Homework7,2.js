const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function uniqueValues(arr1, arr2) {
  
  return arr1.concat(arr2).filter((value, index, array) => array.indexOf(value) === index);;
}
console.log(uniqueValues(array1, array2)); // [1, 2, 3, 4, 5, 6, 7]