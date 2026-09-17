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
let day = "Monday";
// let day = "Saturday";
switch (day) {
    case "Monday":
        console.log("Today is Monday starting of the week");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday end of the week");
        break;
    default:
        console.log("Today is Weekend");
}