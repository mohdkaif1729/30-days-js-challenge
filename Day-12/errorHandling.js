// Activity 1: Basic Error Handling with Try-Catch
function error(num) {
  if (!(typeof (num) === "number")) {
    throw Error("Parameter type is invalid");
  }
  return num + 1;
}

errorHandling("k")

function checkDivisibleOrNot(nr, dr) {
  if (dr === 0) {
    throw Error("Divisible by 0 is not defined");
  }
  return nr / dr;
}


async function errorHandling(num=5) {
  try {
    result = checkDivisibleOrNot(4, 3)
    console.log(result);
    // console.log(num);
  } catch (error) {
    console.log(error);
  }
}




// Activity 2: Finally Block
function tryCatchFinally() {
  try {
    errorHandling()
  } catch (error) {
    console.log(error);
  }
  finally {
    console.log("All thinks are perfectly works");
  }
}

tryCatchFinally()

// Activity 3: Custom Error Objects
class NewError extends Error {
  constructor(error) {
    console.log(error);
  }
}

function checkDivisibleOrNot(nr, dr) {
  if (dr === 0) {
    throw new NewError("Divisible by 0 is not defined");
  }
  return nr / dr;
}


async function errorHandling(num=5) {
  try {
    result = checkDivisibleOrNot(4, 4)
    console.log(result);
    // console.log(num);
  } catch (error) {
    console.log(error);
  }
}

errorHandling()

function stringChecking(name) {
  try {
    if (!name.length) {
      throw Error("Empty username please enter or try again")
    }
  } catch (error) {
    console.log(error);
  }
  finally {
    console.log("perfect");
  }
}

stringChecking("")

// Activity 4: Error Handling in Promises
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise one");
    resolve("Internal server error")
  }, 2000)
})

promiseOne
  .then(() => {
    console.log("kaif");
  })
  .catch((error) => {
    console.log(error);
  })

async function checkPromise() {
  try {
    const data = await promiseOne
  } catch (error) {
    console.log(error);
  }
}

// Activity 5: Graceful Error Handling in Fetch

fetch("https://api.gitub.com/users/MohdKaif1729")
  .then((data) => {
    return data.json()
  }).catch((error) => {
  console.log("Data not fetched: ", error);
  })

async function github() {
  try {
    const data = await fetch("https://api.github.com/users/MohdKaif179")
    const response = await data.json()
    console.log(response);

  } catch (error) {
    console.log(error.message);
  }


}


github()
