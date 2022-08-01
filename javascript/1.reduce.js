let arr = [1, 6, 3, 7, 34, 2, 7, 4];

let sum = arr.reduce((a, b) => a + b);
console.log('sum: ', sum);

let max = arr.reduce((a, b) => (a > b ? a : b));
console.log('max: ', max);

let min = arr.reduce((a, b) => (a < b ? a : b));
console.log('min: ', min);
