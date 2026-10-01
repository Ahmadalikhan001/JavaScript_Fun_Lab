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
console.log(item.textContent);

const item2 = document.createElement("li");
item2.textContent = "Learn JS ClassList and Creat list item throug JS.";
list.appendChild(item2);
console.log(item2.textContent);
const item3 = document.createElement("li");
item3.textContent = "Learning the Basice JS"
list.appendChild(item3);
console.log(item3.textContent);
const item4 = document.createElement("li");
item4.textContent = "This the is item 4";
list.appendChild(item4);
console.log(item4.textContent);