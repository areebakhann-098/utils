// // /object 
// let o={
//     "name": "areeba",
//     "job": "web devloper",
// } 
// console.log(o)
// o.salary=30000
// console.log(o)

// // // TASK 3
// let student={
//     "name": "areeba",
//     "age": 24,
//     "course": "computer science"   
// }
// console.log(student)

// //task 
// const students={
//     name: "areeba",
//     age: 24
// }
//  students.name= "areeba khalid"
//  console.log(students)
//  console.log(typeof students)

//task 9
const person={name: "ali", age: 24,
    address: {
        city: "abottabad",
        country: "pakistan"

    }
}
console.log(person.address.city)
console.log(typeof person.name)

// //task
let userName={
    email: "areebakhalid9854@gmail.com",
    fullname:{
        userfullname:{
            firstname: "areeba",
            lastname: "khalid"
        }
    }
};
console.log(userName.fullname.userfullname.lastname)

// //merge
let obj1={1: "a", 2: "b"}
let obj2={3: "c", 4: "d"}
const obj3= Object.assign(obj1, obj2)
console.log(obj3)
//using spread operator
const obj4={...obj1,...obj2}
console.log(obj4)