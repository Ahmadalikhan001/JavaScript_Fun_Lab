// console.log("Hello, World!");
// let x = 5;
// let y = 10;
// console.log("The sum of x and y is : ", x + y);
// let z = "This is a string variable.";
// console.log(typeof x, typeof y, typeof z);

// for (let i = 0; i <= 5; i++) {
//     console.log("The value of i is: ", i);
// }

// let a = 12;
// let b = 23;
// console.log("sum of a and b is: ", b + a);

// let c = 10;
// for (c = 10; c >= 0; c--) {
//     console.log("The value of c is: ", c);
// }

// for (let d = 0; d <= 20; d++) {
//     console.log("The value of d is : ", d);
// }
// for (let e = 10; e >= 0; e--) {
//     console.log("The value of e is : ", e);
// }

// let f = 1;
// if (f < 5 || f == 0) {
//     console.log("The Value of f is less than 5: ", f);
// }
// if (f < 10 && f >= 6) {
//     console.log("The Value of f is greater than 5 and less than 10: ", f);
// }
// else if (f == 5) {
//     console.log("The Value of f is Exactly : ", f);
// }

// let a = 2, b = 2;
// let formula_1 = Math.pow(a + b, 2);
// let formula_2 = Math.pow(a, 2) + Math.pow(b, 2) + 2 * a * b;
// console.log("Formula 1: ", formula_1);
// console.log("Formula 2: ", formula_2);
// console.log("LHS = RHS:", formula_1 === formula_2);

// const counters = ["Paksitan", "USA", "Uk", "Malaysia", "China"];
// console.log(counters);
// counters[0] = "India";
// console.log(counters);
// console.log(counters.length);
// counters.push("Bangladesh");
// console.log(counters);
// const index = counters.indexOf("USA");
// console.log("Index of USA is: ", index);
// counters.splice(index, 1);
// console.log(counters);
// counters.pop();
// console.log(counters);
// let new_counters = counters.map(counter => counter.toUpperCase());
// console.log(new_counters);
//Normal for loop
// let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = Num.length - 1; i >= 0; i--) {
//     console.log(Num[i]);
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Number2 = number1.map(number1 => number1 * 2);
// console.log(Number2);

// let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Number);
// console.log(Number.length);
// console.log(typeof Number);
// Number.push(11);
// console.log(Number);


// Number.pop();
// console.log(Number);

// Number.shift();
// console.log(Number);
// console.log(Number[0]);
// let includesOne = Number.includes(1);
// console.log("Does the array include 1?", includesOne);
// Number.unshift(1);
// console.log(Number);
// console.log(Number[0]);

// let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let index = Number.indexOf(Number);
// console.log("Index of Number is: ", index);

// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let new_a = a.map(a => a * 2);
// console.log(new_a);

// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let new_a = a.map(a => a + 2);
// console.log(new_a);
// a.pop();
// console.log(a);
// new_a.pop();
// console.log(new_a);
// a.shift();
// console.log(a);
// new_a.shift();
// console.log(new_a);
// a.unshift(1);
// console.log(a);
// new_a.unshift(2);
// console.log(new_a);
// a.push(11);
// console.log(a);
// new_a.push("Hello");
// console.log(new_a);


// const ages = [12, 15, 17, 21, 25, 30];

// const result = ages.find(age => age >= 18);

// console.log(result);

// objects and Arrays
// let obj = {
//     name: "Ahmad",
//     age: "28",
//     education: "Master",
// }
// console.log(obj);
// // single Value of object
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.education);
// obj.address = "Pakistan";
// console.log(obj);

// // changing Value of object

// obj.name = "Ali";
// console.log(obj.name);
// console.log(obj);

// // for loop in object
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// let students = [{ name: "Ahmad", age: 28, eduction: "Master", address: "Pakistan" }, { name: "Ali", age: 30, eduction: "PhD", address: "USA" }];
// console.log(students);

// for (let student of students) {
//     console.log(student);
// }

// Logical Operators
// let age = 20;
// let hasID = true;

// if (age >= 18 && hasID === true) {
//     console.log("You can enter");
// }
// its print "You can enter" if the age is greater than or equal to 18 and hasID is true.
// let age = 16;
// let hasParent = true;

// if (age >= 18 || hasParent === true) {
//     console.log("You can enter");
// }
// its print "You can enter" if the age is greater than or equal to 18 or hasParent is true. so the output will be "You can enter" because the age is less than 18 but hasParent is true.

// let hasID = false;

// if (!hasID) {
//     console.log("You don't have an ID");
// }

// its print "You don't have an ID" if hasID is false. so the output will be "You don't have an ID" because hasID is false.

// if/else if statements
// let day = "Monday";
// let day = "Saturday";
// if (day === "Monday") {
//     console.log("Today is Monday starting of the week");
// } else if (day === "Tuesday") {
//     console.log("Today is Tuesday");
// } else if (day === "Wednesday") {
//     console.log("Today is Wednesday");
// } else if (day === "Thursday") {
//     console.log("Today is Thursday");
// } else if (day === "Friday") {
//     console.log("Today is Friday end of the week");
// } else {
//     console.log("Today is Weekend");
// };

// Switch statement
// let day = "Monday";
// // let day = "Saturday";
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday starting of the week");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Today is Friday end of the week");
//         break;
//     default:
//         console.log("Today is Weekend");
// }

// Ternary Operator ? :

// Now let's learn the ternary operator.

// It's actually a short way of writing a simple if...else.

// Normal if...else
// let age = 20;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Child");
// }

// // Ternary Operator
// let age2 = 20;
// let result = (age2 >= 18) ? "Adult" : "Child";
// console.log(result);

// let age = 20;
// let hasID = true;

// let result = age >= 18 && hasID ? "Allowed" : "Denied";

// console.log(result);

// Grade Calculator

// let marks = "47";
// if (marks >= 80) {
//     console.log("A+");
// } else if (marks >= 60 && marks < 80) {
//     console.log("B");
// } else if (marks >= 50 && marks < 60) {
//     console.log("C")
// } else {
//     console.log("Fail")
// }

// switch method
// let marks = 90;
// switch (true) {
//     case marks >= 80:
//         console.log("A+");
//         break;
//     default:
//         console.log("Fail");
// }
// let marks = 90;

// switch (true) {
//     case marks >= 80:
//         console.log("A+");
//         break;

//     default:
//         console.log("Fail");
// }

// let marks = 49;
// switch (true) {
//     case marks >= 80:
//         console.log("A+");
//         break;
//     case marks >= 60 && marks < 80:
//         console.log("B");
//         break;
//     case marks >= 50 && marks < 60:
//         console.log("C");
//         break;
//     default:
//         console.log("Fail")
// }

// using the Ternary operator

// let marks = 40;
// let graid = (marks >= 80 ? "A+" : marks >= 60 && marks < 80 ? "B" : marks >= 50 && marks < 60 ? "C" : "Fail");
// console.log(graid);

// let marks = 70;
// let result = (marks >= 80 ? "A+" : marks >= 70 && marks < 80 ? "A" : marks >= 60 && marks < 70 ? "B" : marks >= 50 && marks < 60 ? "C" : marks >= 50 && marks < 60 ? "C" : "Fail");
// console.log(result);

// For loop
// for (let i = 0; i < 4; i++) {
//     console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// Object in JavaScript
// const student = {
//     name: "Ali",
//     rollNo: 1,
//     age: 13,
//     country: "Pakistan"

// }

// console.log(student.rollNo);
// console.log(student);
// student.name = "Ahad"
// console.log(student)
// student.PhNo = 984544;
// console.log(student);
// console.log(Object.keys(student));
// console.log(Object.keys(student).length);
// delete student.PhNo;
// console.log(student);
// console.log(Object.keys(student));
// console.log(Object.keys(student).length);

// //Arrays in Java Script

// const fruits = ["Mangos", "Apple", "Oringes"];

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// fruits[0] = "Banana";
// console.log(fruits);
// fruits.push("Mango");
// console.log(fruits);

// console.log(Object.keys(fruits));
// console.log(Object.keys(fruits).length);


// fruits.pop();
// console.log(fruits);
// console.log(Object.keys(fruits));

// Object + Array Together

// const students = [
//     {
//         name: "Amjad",
//         RollNo: 1,
//         phNo: 9877
//     },
//     {
//         name: "Adil",
//         RollNo: 2,
//         PhNo: 6546
//     }

// ];

// console.log(students);
// console.log(Object.keys(students));
// console.log(Object.keys(students).length)
// console.log(students[0]);
// console.log(Object.keys(students[0]));
// console.log(Object.keys(students[0]).length);

// null does not mean:
// "This variable will always be null."
// It means:
// "Right now, this variable intentionally has no value."

// let User = null;
// console.log(User);

// User = {
//     name: "Fawad",
//     phNo: 172133343,
//     roomNo: 2
// }

// console.log(User);
// console.log(User.name);

// if else , else if

// let age = 23;
// if (age >= 18) {
//     console.log("Adualt");
// } if (age < 18) {
//     console.log("child")
// }

// let rusult = (age >= 18 ? "Adualt" : "child");
// console.log(rusult);

// let day = "Tuesday";

// if (day === "Monday") {

//     console.log("Start of the Week");

// } else if (day === "Tuesday") {

//     console.log("Tuesday");

// } else if (day === "Wednesday") {

//     console.log("Wednesday");

// } else if (day === "Thursday") {

//     console.log("Thursday");

// } else if (day === "Friday") {

//     console.log("Friday");

// } else if (day === "Saturday") {

//     console.log("Weekend");

// } else if (day === "Sunday") {

//     console.log("Weekend");

// } else {

//     console.log("Invalid day");

// }
//Switch and Tenary Operator
// let number = 78;
// switch()

// let day = "Saturday";
// switch (day) {
//     case "Monday":
//         console.log("Start of the Week");
//         break;
//     case "Tuesday":
//         console.log("second day of the Week");
//         break;
//     case "wednesday":
//         console.log("3rd day of the week");
//         break;
//     case "Thursday":
//         console.log("4th day of the Week");
//         break;
//     case day = "Friday":
//         console.log("Last day of the Week");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid day")

// };

// Ternary Operator ? :

// let day = "Sunday";
// let Function_day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// let result = (Function_day.includes(day) ? "Working day" : day === "Sunday" || day === "Saturday" ? "Weekend" : "Invalid day");
// console.log(result);

// for loop

// for (let i = 1; i <= 29; i++) {
//     console.log(i);

// }

// for (let i = 29; i >= 0; i--) {
//     console.log(i);
// };

// while loop
// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let a = 5;
// while (a >= 0) {
//     console.log(a);
//     a--
// };


// for of & for in

// let students = ["Ahmad", "Ali", "Khan"];
// for (let student of students) {
//     console.log(student);
// }

// let countries = ["Pakistan", "Japan", "USA", "Malaysia"];
// for (let country of countries) {
//     console.log(country);
// }

// for (let country in countries) {
//     console.log(country);
// }

// for of and for in in Object

// let students = {
//     name: "Ahmad",
//     age: 29,
//     country: "Pakistan",
// };
// // for (let student in students) {
// //     console.log(student)
// // };

// for (let key in students) {
//     console.log(key, students[key])
// }

// Even Number Paractice

// let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i in Number) {
//     console.log(i)
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// };

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(0, "Zero")
//     } else if (i % 2 === 0) {
//         console.log(i, "Even")
//     } else {
//         console.log(i, "odd")
//     }
// }

// Function in javaScript

// function Add(a, b) {
//     console.log(a + b);
// }

// Add(12, 34);

// const arrowAdd = (a, b) => a + b;


// console.log(arrowAdd(12, 34));

// function multiply(a, b) {
//     console.log(a * b);
// }

// multiply(2, 3);

// const Multiply = (a, b) => a * b;

// console.log(Multiply(5, 4));

// function Hello(name) {
//     console.log("Hellow : ", name);
// }

// Hello("Ahmad");

// const hello = (name) => "Hellow : " + name;

// console.log(hello("Ahmad"));

// function subtraction(a, b) {
//     console.log(a - b);
// }

// sc(20, 5);

// const Subtraction = (a, b) => a - b;
// console.log(Subtraction(20, 5));

// Use of return

// function returnAdd(a, b) {
//     return a + b;
// };

// let result = returnAdd(2, 2);
// let double = result * 2;

// console.log(result + "\n" + double);

// const reAdd = (a, b) => {
//     return a + b;
// }

// let Result = reAdd(2, 2);
// let doubleResult = Result * 2;

// console.log(Result + "\n" + doubleResult);

// Next small concept: Default Parameters

// JavaScript lets us give a parameter a default

// function Hellow(name = " Friend") {
//     console.log("Hello" + name);
// }

// Hellow(" Ahmad");

// let hellow = (name = " Friend") => "Hello" + name;


// console.log(hellow(" Ahmad"));

// callback in JavaScript;

// function Add(a, b) {
//     console.log(a + b);
// };
// function sub(a, b) {
//     console.log(a - b);
// }
// function mul(a, b) {
//     console.log(a * b);
// }


// function BackCall(backcall) {
//     backcall(5, 5);
// };

// BackCall(Add);
// BackCall(sub);
// BackCall(mul);


// callBAck fuction Using the Arrow Function

const Add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;


// let FinalFun = (callback) => callback(5, 5);

// console.log(FinalFun(Add));
// console.log(FinalFun(sub));
// console.log(FinalFun(mul));

// let FinalFun = (a, b, callback) => {
//     console.log(a + b);
//     console.log(callback(5, 5));
// };

// console.log(FinalFun(3, 3, Add));

// Array and Array Methods


// let Array1 = ["Ahmad", "Ali", "Khan"]
// console.log(Array1);
// console.log(Array1[2]);

// Array1[0] = "Pakistan";
// console.log(Array1);

// Array1.pop();
// console.log(Array1);
// Array1.shift("Pakistan");
// console.log(Array1);
// Array1.unshift("Ahmad");
// console.log(Array1);
// Array1.push("Khan");
// console.log(Array1);
// console.log(Array1.length);

let student = ["Ahmad", "Ali", "Khan", "Fahad", "Alim", "Adil"];
console.log(student);
// changing the Item
student[2] = "Wahid";
console.log(student);
// Array length method

console.log(student.length);

console.log(student[0].length, student[1].length);

// reverse the item of the Array
let resule = student.reverse();
console.log(resule);

// let sturent2 = ["Mustafa", "Shakir", "Iftaher"];
// console.log(studentturent2)
// let's join the Two Arrays

// late add the item in Array

student.push("Kashif");
console.log(student);

// delet the last item from the Array

student.pop();
console.log(student);

// rermove the first item of the Array

student.shift();
console.log(student);

// Add item to the beinning of the Array
student.unshift("Ahmad");
console.log(student);
student.pop();
console.log(student);

// make a anather copy of the Array

let student2 = student.slice();
console.log(student2);

// lets Check the item is it include or not .

let result = student.includes("Ali");
console.log(result);

let result2 = student2.includes("Ali");
console.log(result2);