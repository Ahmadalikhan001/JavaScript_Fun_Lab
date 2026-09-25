// 🎓 Student Management System — Practice Question.

// let student = [
//     { id: 1, name: "Ali", age: 20, marks: 85 },
//     { id: 2, name: "Ahmed", age: 21, marks: 72 },
//     { id: 3, name: "Sara", age: 19, marks: 91 },
//     { id: 4, name: "Hina", age: 22, marks: 58 },
//     { id: 4, name: "Usman", age: 20, marks: 45 }
// ];

// Print every student's: ID, name, age, marks.
// student.forEach((eachStudent) => {
//     console.log(eachStudent);
// });

// Create a new array containing only the student names.
// let StudentNames = student.map((eachName) => {
//     console.log(eachName.name);
// });

// let NamesOfStudent = [];
// student.map((eachStudentName) => {
//     NamesOfStudent.push(eachStudentName.name)
// });
// console.log(NamesOfStudent);

// let AgeNameStudent = [];
// student.map((eachStudent) => {
//     AgeNameStudent.push(eachStudent.name + ":" + eachStudent.age);
// });
// console.log(AgeNameStudent);
// // Create a new array where 5 marks are added to every student.

// let NewMarks = student.map((Marks) => {
//     return Marks.marks + 5
// });

// console.log(NewMarks);

// let PassStudent =
//     student.filter((student) => {
//         return student.marks >= 60;

//     });
// console.log(PassStudent);

// // find sara?
// let sara = student.find((student) => {
//     return student.name === "Sara";
// });

// console.log(sara);

// Object in JavaScript

const Obj1 = {
    name: "Ahmad",
    age: 28,
    eduction: "Master"
}
console.log(Obj1);

Obj1.name = "Ahmad Ali Kan";
console.log(Obj1);

delete Obj1.name;
console.log(Obj1);

Obj1.name = "Ahmad";
console.log(Obj1);

// Method in JS

const obj2 = {
    name: "khan",
    f_name: "Nek",
    work() {
        console.log("student", `My name is ${this.name}`)
    }
}
obj2.work();

// Nested Objects
const Student = {
    name: "Ali",
    RollNo: 1,
    class: "6th",
    address: {
        country: "Pakistan",
        city: "Islamabad",
        homeNo: 34
    }
};

console.log(Student);