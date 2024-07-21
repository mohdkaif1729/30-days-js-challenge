const body = document.querySelector("body");

// Activity 1: Selecting and Manipulating Elements
const textContent = document.getElementById("text-content");
textContent.innerHTML = "Hello, Mohd Kaif"

const backgroundColor = document.querySelector(".background-color");
backgroundColor.style.backgroundColor = "black"


// Activity 2: Create and appending elements
const div = document.createElement("div");
const divContent = document.createTextNode("New created div");
div.appendChild(divContent);
body.appendChild(div);

const li = document.createElement("li");
const programmingLanguages = document.querySelector("#programming-languages");
const liContent = document.createTextNode("Python");
li.appendChild(liContent);
programmingLanguages.appendChild(li);


// Activity 3: Remove elements
const removeDiv = document.querySelector("#remove-div");
removeDiv.remove();

body.lastChild.remove();


// Activity 4: Modifying attributes and classes
const codingImage = document.querySelector("#coding-image");
codingImage.setAttribute("alt", "Coding-screen-image");

body.classList.remove("light")
body.classList.add("dark")

// Activity 5: Event handling
const changeContent = document.querySelector(".change-content");
const changeContentBtn = document.querySelector(".change-content-btn");
changeContentBtn.addEventListener("click", (e) => {
  changeContent.innerHTML = "Free AI Courses from NVIDIA: For All Levels"
})

const changeBorderColorBtn = document.querySelector(".change-border-color-btn")
changeContent.addEventListener("mouseover", (e) => {
  changeContent.style.border = "2px solid white"
})