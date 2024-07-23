// Activity 1: Understanding Promises
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("20-second timeout")
  }, 2000)
})
promiseOne
  .then((response) => {
  console.log(response);
  })
  .catch((error) => {
  console.log("ERROR: ", error);
  })

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("20-second timeout")
  }, 2000)
})
promiseTwo
  .then((response) => {
  console.log(response);
  })
  .catch((error) => {
  console.log("ERROR: ", error);
})


// Activity 2: Chaining Promises
function fetchData(serverNo, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`server ${serverNo} response`);
    }, delay)
  })
}
fetchData(1, 1000)
  .then((response) => {
    console.log(response);
    return fetchData(2, 1000)
})
  .then((response) => {
    console.log(response);
    return fetchData(3, 1000)
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
  console.log("ERROR: ", error);
})


// Activity 3: Using Async/Await
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(7);
  }, 2000)
})
async function dataResolveThree() {
  const data = await promiseThree
  console.log(data);
}
dataResolveThree()

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("internal server error");
  }, 2000)
})
async function dataResolveFour() {
  try {
    const data = await promiseFour
    console.log(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
dataResolveFour()


// Activity 4: Featchin Data from an API
const userData = fetch("https://api.github.com/users/MohdKaif1729")
userData
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR: ", error);
  })
async function userData() {
  try {
    const response = await fetch("https://api.github.com/users/MohdKaif1729");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }

}
userData();


// Activity 5: Concurrent Promisess
function fetchDataTwo(serverNo, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`server ${serverNo} response`);
    }, delay)
  })
}
const allFetchPromises = [
  fetchDataTwo(1, 1000),
  fetchDataTwo(2, 1000),
  fetchDataTwo(3, 1000)
]
Promise.all(allFetchPromises)
  .then((result) => {
    result.forEach((result, index) => {
      console.log(`Server ${index + 1}: ${result}`);
    });
  })
  .catch((error) => {
  console.log("ERROR: ", error);
})


function fetchDataThree(serverNo, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`server ${serverNo} response`);
    }, delay)
  })
}
const allFetchPromises2 = [
  fetchDataThree(1, 3000),
  fetchDataThree(2, 1500),
  fetchDataThree(3, 1000)
]
Promise.race(allFetchPromises2)
  .then((result) => {
    console.log(`Fastest result is: ${result}`);
  })
  .catch((error) => {
  console.log("ERROR: ", error);
})