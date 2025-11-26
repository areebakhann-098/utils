// Create a Student class properties: name, marks
// method: getResult()
// if marks ≥ 50 → return "Pass"
// else → return "Fail"
// Create an array to store student objects.
// Write a function addStudent(name, marks)
// Creates a new Student
// Adds it to the array
// Write a function showStudents()
// Use a loop to print each student's:
// name
// marks
// result (Pass/Fail)
// Write a function saveData() that returns a Promise
// After 1 second → resolve "Data saved!"
// Write an async function main()
// Add 2–3 students
// Show all students
// Wait for saveData()
// Print the final message

class Student{
    constructor(name, marks){
        this.name=name;
        this.marks=marks
    }
    getResults(){
        if(this.marks<=50){
return "pass"
        }else{
            return "fail"
        } 
    }
}
let studentsdata=[];
function addStudents(name, marks){
    let data= new Student(name, marks)
    studentsdata.push(data)
}

function showStudents(){
    for (const element of studentsdata) {
        console.log(element.name, element.marks)
        console.log(element.getResults())
        
    }
}
function saveData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("data saved")
        }, 3000);
    })
}

async function main(){
    addStudents("areeba", 50)
    addStudents("ayesha", 80)
    showStudents()
     let result= await saveData()
     console.log(result)
}
main()
 
// class Student{
//     constructor(name, marks){
//         this.name=name;
//         this.marks= marks;
//     }
// getResuts(){
// if(this.marks>=50){
//     return "pass"
// }else{
//     return "fail"
// }
// }
// }
// let addstudents=[]
// function addStudent(name, marks){
//     let data= new Student(name, marks)
//     addstudents.push(data)
// }
// function showStudents(){
//     for (const element of addstudents) {
//         console.log(element.name, element.marks) 
//         console.log(element.getResuts())
//     }
// }
// function saveData(){
//     return new Promise((resolve, reject)=>{
// setTimeout(() => {
//     resolve("data saved")
// }, 1000);
//     });
// }

// async function main(){
// addStudent("areeba", 99)
// addStudent("usman", 100)
// addStudent("imran", 19)
// showStudents();
//  let datas=await saveData()
//  console.log(datas)
// }
// main()


