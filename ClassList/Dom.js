const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");

// myButton.classList.remove("enabled");
console.log(myButton.textContent);
let x = myButton.classList.toggle("enabled");
console.log(x);

console.log("Creating the Li item Useing JS.");

const list = document.querySelector(".list1");
console.log(list.textContent);

const item = document.createElement("li");
item.textContent = "Learn JavaScript";
list.appendChild(item);

const item2 = document.createElement("li");
item.textContent = "Learn JS ClassList and Creat list item throug JS.";
item.appendChild(item2);