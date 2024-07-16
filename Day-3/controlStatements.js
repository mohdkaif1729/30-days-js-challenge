// Activity 1: if else statement
const num = 7;
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Number is Zero");
}

const age = 19;
if (age >= 18) {
  console.log("You are eligible for vote");
} else {
  console.log("You are not eligible for vote");
}

// Activity 2: nested if else statement
const num1 = 3;
const num2 = 5;
const num3 = 7;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is largest`);
  } else {
    console.log(`${num3} is largest`);
  }
} else {
  if (num2 > num3) {
    console.log(`${num2} is largest`);
  } else {
    console.log(`${num3} is largest`);
  }
}


// Activity 3: switch case statement
const weakDayNumber = 3;

switch (weakDayNumber) {
  case 1: 
    console.log("Monday");
    break;
  case 2: 
    console.log("Tuesday");
    break;
  case 3: 
    console.log("Wednesday");
    break;
  case 4: 
    console.log("Thursday");
    break;
  case 5: 
    console.log("Friday");
    break;
  case 6: 
    console.log("Saturday");
    break;
  case 7: 
    console.log("Sunday");
    break;
  default: 
    console.log("Day number is wrong");
    break;
}


const scoreOfStudent = 'A';
switch (scoreOfStudent) {
  case 'A':
    console.log("Marks between 90 to 100");
    break;
  case 'B': 
    console.log("80 to 89");
    break;
  case 'C': 
    console.log("70 to 79");
    break;
  case 'D': 
    console.log("60 to 69");
    break;
  case 'E': 
    console.log("50 to 59");
    break;
  case 'F': 
    console.log("40 to 49");
    break;
  default: 
    console.log("Fail");
    break;
}

// Activity 4: conditional (ternary) operator
num % 2 ? console.log("Number is even") : console.log("Number is Odd");


// Activity 5: combining condition
const year = 2024;

if (year % 100 === 0) {
  if (year % 400 === 0) {
    console.log("Year is a leap year");
  } else {
    console.log("Year is not a leap year");
  }
} else {
  if (year % 4 === 0) {
    console.log("Year is a leap year");
  } else {
    console.log("Year is not a leap year");
  }
}
