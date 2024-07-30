// Activity 1: understanding closure
function hello() {
  const username = "Mohd Kaif";
  function usernamefn() {
    console.log(`Hello ${username}`);
  }
  usernamefn();
  return usernamefn;
}

function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}
const counterValue = counter();
counterValue();


// Activity 2: practical closure
function uniqueId() {
  let id = Math.random();

  function increment() {
    id += 1;
    console.log(id);
  }
  
  return increment;
}
const unqId = uniqueId();
unqId();
unqId();
unqId();


function hello() {
  const username = "Mohd Kaif";
  function usernamefn() {
    console.log(`Hello ${username}`);
  }
  return usernamefn;
}

const greet = hello();
greet();


// Activity 3: understanding closure
function arrayFn(index) {
  function printIndex() {
    console.log(index);
  }
  return printIndex;
}

const arrayOfFn = [];
for (let i = 0; i < 5; i++) {
  arrayOfFn.push(arrayFn(i));
}
arrayOfFn[4]();


// Activity 4: understanding closure
const ItemManager = (function() {
  let items = [];

  return {
    addItem: function(item) {
      items.push(item);
      console.log(`Item "${item}" added.`);
    },
    removeItem: function(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`Item "${item}" removed.`);
      } else {
        console.log(`Item "${item}" not found.`);
      }
    },
    listItems: function() {
      if (items.length === 0) {
        console.log('No items in the collection.');
      } else {
        console.log('Items in the collection:');
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      }
    }
  };
})();
ItemManager.addItem('Book');
ItemManager.addItem('Pen');
ItemManager.listItems();     
ItemManager.removeItem('Pen');
ItemManager.listItems();     


// Activity 5: understanding closure
function add(num1, num2) {
  const sum = num1 + num2;

  function memoizes() {
    console.log(sum);
  }
  return memoizes;
}
const sum = add(1, 2);
sum();


function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  function memoizes() {
    console.log(fact);
  }
  return memoizes;
}
const fact = factorial(5);
fact();