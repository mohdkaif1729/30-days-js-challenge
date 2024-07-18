// Activity 1: Array Creation and Access
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length - 1]);


// Activity 1: Array Method (Basic)
arr.push(6);
console.log(arr);
arr.pop()
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5)
console.log(arr);

// Activity 1: Array Method (Intermediate)
const doubleOfItself = arr.map(element => 2 * element)
console.log(doubleOfItself);
const evenElements = arr.filter(element => element % 2 === 0 ? element: null)
console.log(evenElements);
console.log(arr);
const sumOfAllElement = arr.reduce((accumulator, initialValue) => {
  return accumulator + initialValue;
}, 0)
console.log(sumOfAllElement);


// Activity 1: (Array Iteration)
for (let i = 0; i < arr.length; i++) {
  process.stdout.write(`${arr[i]} `);
}
process.stdout.write(`\n`);
arr.forEach(element => console.log(element))


// Activity 1: (Multi-dimensional Arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    process.stdout.write(`${matrix[i][j]} `);
  }
  process.stdout.write(`\n`);
}

console.log(matrix[1][0]);

let variable1 = 'Hello';
let variable2 = 'world';
