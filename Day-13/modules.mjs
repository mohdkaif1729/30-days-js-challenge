// Activity 1: Creating and Exporting Modules
import { add } from "./addTwoNumbers.mjs";
import { person } from "./personDetails.mjs";

console.log(add(2, 3));
person.printDetails();

// Activity 2: Named and Default Exports
import { greet, question } from "./multipleFunctions.mjs";
import defaultExport from "./defaultExport.mjs";

greet();
question();
defaultExport();

// Activity 3: Importing Entire Modules
import { user } from "./exportObjectAsFunction.mjs";

user.printuser();

// Activity 4: Using Third-Party Modules
import loadash from "lodash"
import axios from "axios";

const numbers = [1, 2, 3, 4]
const names = ["sohan", "mohan", "rohan"]
const result = loadash.concat(numbers, names)
console.log(result);

const response = axios("https://api.github.com/users/MohdKaif1729")
response
  .then((data) => {
    console.log(data);
  })


