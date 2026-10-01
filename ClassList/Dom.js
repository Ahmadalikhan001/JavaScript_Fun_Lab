const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");

// myButton.classList.remove("enabled");
console.log(myButton.textContent);
let x = myButton.classList.toggle("enabled");
console.log(x);