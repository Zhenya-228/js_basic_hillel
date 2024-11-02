const numbers = [1, 2, 3, 4, 5];

function analyzeArray(numbers) {
	let sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0)
	let average = sum / numbers.length
	let new_numbers = numbers.sort()
	let min = new_numbers[0]
	let max = new_numbers[new_numbers.length - 1]
	return {sum, average, min, max}
}
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }