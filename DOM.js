console.log("Starting a DOM");

let h1 = document.querySelector("h1").textContent = "DOM in JS.";
console.log(`Now we will change the text of h1 ${h1}`);

let P1 = document.querySelector("p");
console.log(P1.textContent);

let P2 = document.querySelector("p").textContent = "Pakistan Zindabad";
console.log(P2);

let ClassCall = document.querySelector(".ClassUse");
console.log(ClassCall.textContent);