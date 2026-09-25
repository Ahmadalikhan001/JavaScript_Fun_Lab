// 🎓 Student Management System — Practice Question.

let student = [
    { id: 1, name: "Ali", age: 20, marks: 85 },
    { id: 2, name: "Ahmed", age: 21, marks: 72 },
    { id: 3, name: "Sara", age: 19, marks: 91 },
    { id: 4, name: "Hina", age: 22, marks: 58 },
    { id: 4, name: "Usman", age: 20, marks: 45 }
];

// Print every student's: ID, name, age, marks.
// student.forEach((eachStudent) => {
//     console.log(eachStudent);
// });

// Create a new array containing only the student names.
let StudentNames = student.map((eachName) => {
    console.log(eachName.name);
});
let NamesOfStudent = [];
student.map((eachStudentName) => {
    NamesOfStudent.push(eachStudentName.name)
});
console.log(NamesOfStudent);