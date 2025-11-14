
//let var and const

var a=2;
a=a+2
console.log(a)//allowed

let b=2
b=b+2
console.log(a) //allowed

const c=5
c=c+5
console.log(c)//not allowed 

{
    let x=7
    console.log(x)
}

{
    let x=10
console.log(x)
}
// console.log(x)// not allowed

function hi(y, z){
    return y+z
}
   console.log(hi(2,9))

// // data type
let x="areeba";
let y= 40;
let z= 60.98;
let c=undefined;
let v=null;
let b= true
console.log(x,y,z,c,v,b)
console.log(typeof x, typeof y, typeof z, typeof v, typeof c, typeof b )


let a= "areeba";
let m=80;
console.log(a+m)
console.log(typeof a, typeof m)

// // //TASK 1
let x ="areeba";
let age=24;
is_student= true
console.log(x, age, is_student)

// // //TASK 2
var city= "abbottabad";
let country= "pakistan";
const planet="earth"
console.log(city, country, planet)



// // //Task 3
let u="usman";
let a = 24
console.log(u+a)

// // // //TASK 4
const name="areeba";
name="khalid"//wrong

// // //Task 5
let Name= "areeba"; // global variable
 function Hellow(){
    console.log("hellow", Name)
 }
 Hellow()
 console.log(Name)


// //Task 6
 username="areeba"
 function sayHellow(){
     let username="momna"
     console.log(username)

 }
 sayHellow()
 console.log(username)

//Task 7
let num="10"
 let convertNum= Number(num)
 let result = convertNum+5
 console.log(result)


// //task 10
let x= "areeba"
let y=2
console.log(x+y)
console.log(x-y)


let userName="usman niaz swati";
let a=""
// let convertname= Boolean(userName)
let converta= Boolean(a)

if(converta===true){
    console.log("true")
}else {
    console.log("false")
}
console.log(typeof converta)
 