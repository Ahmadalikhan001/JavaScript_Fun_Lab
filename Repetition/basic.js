const country = "pakistan";
console.log(`If we use const we can not resing other vaule to for Examlpe ${country} and const as a block scope.`);

let Age = 25;
console.log(`When we Use let to declear any value it's will be allow to change again and also define first and allow to give the value after but must be before use see the age ${Age} after one year it will be change.let as a block Scope. `);

var Eduction = "Mphil";
console.log("var have a global scope and it same as a let only .");

let DataTypes = "String, Number, Boolean, Null, Undefined, Symbol, BigInt and Object";
console.log(`In JavaScript we have many data types like ${DataTypes} and all are use to store the value in different way.`);

let a = 500;
let b = 100;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater than ${a}`);
};

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a === b) {
    console.log(`${a} is equal to ${b}`);
} else {
    console.log(`${b} is greater than ${a}`);
};

console.log(`Logic Operators are used to combine two or more conditions and return a boolean value. The logical operators in JavaScript are:
1. AND (&&): Returns true if both conditions are true.
2. OR (||): Returns true if at least one condition is true.
3. NOT (!): Returns the opposite boolean value of the condition.`);

let c = 2200;
if (a > b && a > c) {
    conslole.log(`${a} is Greater then ${b} and ${c}`)
} else if (a > b || a === b) {
    console.log(`${a} isGreater then ${b} or ${a} is equal to ${b}`);
} else if (a < b && a < c) {
    console.log(`${a} is less then ${b} and ${c}`);
} else {
    console.log(`${a} is less then ${b} or ${a} is equal to ${b}`);
};

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}