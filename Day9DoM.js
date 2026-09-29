console.log("The Day 9 Of DOM in JS.");

const headingOne = document.querySelector("h1");
console.log(headingOne);
console.log(headingOne.textContent);
headingOne.textContent = "I'm trying to change the inner text of the h1 through querySelector() method"
console.log(headingOne.textContent);

console.log("Try to call the ClassUse Element.")
const ClassUse = document.querySelector(".ClassUse");
console.log(ClassUse);
console.log(ClassUse.textContent);
ClassUse.textContent = "Trying to change its inner text of ClassUse h1."
console.log(ClassUse);