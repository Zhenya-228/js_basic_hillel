const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(arr1, arr2) {
  return arr1.filter(currentItem => arr2.includes(currentItem));
}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]
