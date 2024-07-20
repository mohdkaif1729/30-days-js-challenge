// Activity 1: Template Literals
const personName = "Mohd kaif";
const age = 10;

const templateLiterals = `My name is: ${personName}\nAge is: ${age}`

console.log(templateLiterals);
const Date1 = new Date();
const introduction = `
Hello,
\tI am ${personName} from cs background
\tDate: ${Date1.toDateString()}
Age: ${age}
`
console.log(introduction);

// Activity 2: Destructuring
const nums = [23, 56];
const [ num1, num2 ] = nums;
console.log(num1, num2);


const book = {
  title: "rich dad and Poor dad",
  author: "Robert T. Kiyosaki",
  year: "1999", 
}

const { title, author } = book;
console.log(`Title is: ${title}\nAuthor is: ${author}`);

// Activity 3: Spread and Rest Operators
const moreNums = [...nums, "hello", "bhai"]
console.log(moreNums);

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

const result = sum(1, 2, 3, 4, 5)
console.log(result);

// Activity 4: Default Parameters
function product(num1, num2 = 1) {
  return num1 * num2;
}

console.log(product(7));

// Activity 5: Enhanced Oject Literals
const person  = {
  personName,
  age,
  greet() {
    console.log(`Hello, my name is ${this.personName} and I am ${this.age} years old.`);
  },

  [`ageIn${10}years`]: age + 10

}

person.greet()
console.log(person.ageIn10years);