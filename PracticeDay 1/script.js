console.log("Hellow World");

console.log("Hellow");
console.log(2 + 4);

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);

// comment in JS
// This is a single line comment
/* This is a multi line comment
This is a multi line comment
This is a multi line comment
This is a multi line comment */
/* this is the multi line conmment*/
let age = 28;
console.log(age);
console.log(`My age is ${age}`);

let Name = "Ali";
console.log(Name);
let name1;
console.log(name1);
let a;
console.log(a);

console.log(typeof age);

console.log(22 > 30);
console.log(22 !== 30);
console.log(22 < 30);
console.log(22 == 30);
console.log(22 != 30);


console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

// console.log(Name.includes("Ali"));

console.log(age === 28);

const Nama = "   Ali ";
console.log(Nama);
console.log(Nama.trim());

// Combining Strings
const First_name = "Ahmad";
const Last_name = "Ali Khan";
// const Full_name = First_name + " " + Last_name;
// console.log(Full_name);
// console.log(`${First_name} ${Last_name}`);
console.log(First_name + " " + Last_name);

console.log(First_name.length);

let a1 = 0;
let b = 10;
if (a1 > b) {
    console.log(`${a1} is Greater then ${b}`);
} else if (a1 < b) {
    console.log(`${a1} is Less then ${b}`);
} else {
    console.log(`${a1} is Equal to ${b}`);
};


// for loop
// for (let i = 0; i <= 10; i++) {
//     console.log(`The value of i is ${i}`);
// };
// for (let i = 10; i >= 0; i--) {
//     console.log(`The value of i is ${i}`);
// };

for (let i = 5; i <= 10; i++) {
    console.log(`The value of i is ${i}`);
}

// while Loop:
let i = 10;
while (i >= 0) {
    console.log(i);
    i--
};
console.log("Pritn 1 - 10 numbers");
let i1 = 0
while (i1 <= 10) {
    console.log(i1);
    i1++

}

/* try to print even numbers from 1 to 20;*/

console.log("Try to print even numbers from 0 to 20");

let i2 = 0;
while (i2 <= 20) {
    console.log(i2);
    i2 += 2;
};

/* Function Practice */
function MyFun() {
    console.log("Hello This is MyFun function ")
};

MyFun();

// Function Parameter

function greet(name) {
    console.log(`This is my Name : ${name}`)
}

greet("Ahmad");

function Add(a, b) {
    console.log(a + b)
};

Add(23, 43);

function Intro(name, age) {
    console.log(`I m ${name} and I'm ${age} year old`)
}

// Intro("Ahmad", 24);

for (let i = 1; i <= 50; i++) {
    Intro("Ahmad", 29)
}