// Activity 1: function declaration
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
isEvenOrOdd(7);

function squareOfNum(num) {
  return num * num;
}
console.log(squareOfNum(4));

// Activity 1: function expression
function maxNumInTwo(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater`);
  } else {
    console.log(`${num2} is greater`);
  }
}
maxNumInTwo(5, 7);


function concatenateString(str1, str2) {
  return str1 + str2;
}
console.log(concatenateString("mohd ", "kaif"));

// Activity 1: arrow function
const sumOfTwoNum = (num1, num2) => {
  return num1 + num2;
}
console.log(sumOfTwoNum(5, 7));

const checkStringContainsSpecificChar = (char, string) => {
  return string.search(char) ? true : false;
}
checkStringContainsSpecificChar("d", "mohdkaif");


// Activity 1: function parameters and default values
function productOfTwoNum(num1, num2 = 5) {
  return num1 * num2;
}
productOfTwoNum(7, 8);

function greetingMessage(username, age = 20) {
  return `Hello ${username} at ${age}`;
}
greetingMessage("mohdkaif", 20);

// Activity 1: higher order function 
function printNum(num) {
  console.log(num);
  return;
}
function higherOrderFunCalls(fn, numOfTime) {
  for (let i = 1; i <= numOfTime; i++) {
    fn(7);
  }
  return;
}
higherOrderFunCalls(printNum, 3);

function calculation(fn1, fn2, value) {
  const result = fn1(5, 6);
  return fn2(result);
}
console.log(calculation(sumOfTwoNum, productOfTwoNum));