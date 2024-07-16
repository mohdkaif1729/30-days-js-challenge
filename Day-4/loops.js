// Activity 1: For Loop
for (let i = 1; i <= 10; i++) {
  console.log(`${i} `);
}
console.log("\n");
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${i * 5}`);
}

// Activity 2: While Loop
let sum = 0;
let n = 10;
while (n) {
  sum += n--;
}
console.log("\n");
console.log(`Sum is: ${sum}`);
console.log("\n");
n = 10;
while (n) {
  console.log(`${n--} `);
}
console.log("\n");

// // Activity 3: Do...While Loop
let num = 5;
do {
  console.log(`${num} `);
} while (--num);
num = 5;
console.log("\n");
let factorial = 1;
do {
  factorial *= num--;
} while (num);
console.log(`Factorial is: ${factorial}`);
console.log("\n");


// // Activity 4: Nested Loop
const numOfRows = 5;
for (let i = 1; i <= numOfRows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(`${stars}`);
}
console.log("\n");

// // Activity 5: Loop Control Statements
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`${i} `);
}
console.log("\n");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(`${i} `);
}