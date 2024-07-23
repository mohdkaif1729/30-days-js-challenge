const para = document.querySelector(".change-content");

// Activity 1: Basic Event Handling
document.querySelector(".change-content-btn").addEventListener("click", (e) => {
  para.innerHTML = "Hello, World"
})

document.querySelector(".coding-image").addEventListener("dblclick", (e) => {
  e.target.style.visibility = "hidden";
})

// Activity 2: Mouse Events
const backgroundColorChange = document.querySelector(".background-color");

backgroundColorChange.addEventListener("mouseover", () => {
  backgroundColorChange.style.backgroundColor = "red";
})

backgroundColorChange.addEventListener("mouseout", () => {
  backgroundColorChange.style.backgroundColor = "blue";
})

// Activity 3: Keyboard Events
document.querySelector(".key-down-input").addEventListener("keydown", (e) => {
  console.log(e.key);
})

document.querySelector(".key-down-input").addEventListener("keyup", (e) => {
  console.log(para.innerHTML);
})


// Activity 4: Form Events
const info = document.querySelector(".info");
const submitBtn = document.querySelector(".submit-btn");

info.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(document.querySelector(".name").value);
  console.log(document.querySelector(".email").value);
})

const car = document.querySelector("#car");

car.addEventListener("change", (e) => {
  const p = document.createElement("p");
  p = e.target.value;
  document.querySelector(".dropdown").appendChild(p)
})


// Activity 5: Event Delegation
const programmingLanguages = document.querySelector("#programming-languages");

programmingLanguages.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
})

const addElements = document.querySelector(".click-para");

addElements.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = "kaif";
  programmingLanguages.appendChild(li);
})


