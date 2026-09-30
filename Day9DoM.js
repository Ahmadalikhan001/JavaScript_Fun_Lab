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

console.log("Try to approch and call the IdUse Element.");

const IdUSe = document.querySelector("#idUse");
console.log(IdUSe);
console.log(IdUSe.textContent);
IdUSe.textContent = "Try to change the inner Text of idUse Element "
console.log(IdUSe.textContent);

console.log("Try to approch and call the All Items.");

const AllItems = document.querySelectorAll(".item");
console.log(AllItems);

console.log("To approch and print all the inner Text of all the items late we use ForEach and Function.");
AllItems.forEach(function (item) {
    console.log(item.textContent);
});

console.log("differents and use of InnerHTML and TextContent ");

const H1 = document.getElementById("idUse");
console.log(H1);
H1.innerHTML = "Try to Change the IdUse Element inner text throug innerHTML() method"
console.log(H1.innerHTML);

console.log("Styling in JS");
H1.style.color = "red";

ClassUse.style.backgroundColor = "Blue";

IdUSe.style.fontSize = "12px";

ClassUse.style.fontSize = "12px";

// console.log("classList Method");

// const button = document.getElementById("myButton");

// console.log(button.classList);


console.log("Trying and practiceing Class Css.");


