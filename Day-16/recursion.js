// Activity 1: basic recursion
function factoraial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factoraial(num - 1);
}
console.log(factoraial(5));

function nthFibonacciNumber(num) {
  if (num <= 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  } 

  return nthFibonacciNumber(num - 1) + nthFibonacciNumber(num - 2);
}

console.log(nthFibonacciNumber(10));


// Activity 2: recursion with arrays
function sumOfArray(sum, lastIndex) {
  if (lastIndex === 0) {
    return sum[0];
  }
  return sum[lastIndex] + sumOfArray(sum, lastIndex - 1);
}

const sum = [1, 2, 3, 4, 5];
console.log(sumOfArray(sum, sum.length - 1));

function maxElement(array, lastIndex) {
  if (lastIndex < 0) {
    return Number.MIN_SAFE_INTEGER;
  }
  return Math.max(array[lastIndex], maxElement(array, lastIndex - 1));
}

const array = [5, 2, 8, 9, 1, 3];
console.log(maxElement(array, array.length - 1));

// Activity 3: string mapipulation with recursion
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);


function checkPalindrome(string, i, j) {
  if (i > j) {
    return true;
  }
  if (string[i] != string[j]) {
    return false;
  }

  return checkPalindrome(string, i + 1, j - 1);
}
console.log(checkPalindrome("aapaa", 0, 4));


// Activity 4: recursion search
function binarySearch(array, target, i, j) {
  if (i > j) {
    return -1;
  }
  let mid = i + (j - i) / 2;
  if (array[mid] === target) {
    return mid;
  } 

  else if (array[mid] < target) {
    return binarySearch(array, target, mid + 1, j);
  }

  else if (array[mid] > target) {
    return binarySearch(array, target, j, mid - 1);
  }
}
console.log(binarySearch([1, 4, 6, 7, 8], 6, 0, 4));

function occurrence(array, target, count, lastIndex) {
  if (lastIndex < 0) {
    return count;
  }
  if (array[lastIndex] === target) {
    return occurrence(array, target, count + 1, lastIndex - 1);
  }

  return occurrence(array, target, count, lastIndex - 1);
}
console.log(occurrence([1, 2, 3, 4, 5, 4, 4, 5], 4, 0, 7));