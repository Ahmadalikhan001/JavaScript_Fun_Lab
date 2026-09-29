console.log("The Day 9 Of DOM in JS.");

const headingOne = document.querySelector("h1");
console.log(headingOne);
console.log(headingOne.textContent);
headingOne.textContent = "I'm trying to change the inner text of the h1 through querySelector() method"
console.log(headingOne.textContent);