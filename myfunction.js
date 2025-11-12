function myFunction(name){
return name
}
const result=myFunction("areeba")
console.log(result)


function addNumber(a,b,c){
    return a+b+c
}
let answer = addNumber(2,3,4)
console.log(answer)




function productFunction(x, y){
    if(y===undefined){
        y=2;
    }
return x*y
} console.log(productFunction(6))


function multiplyFunction(x, y){
    if(x===undefined){
        x=4;
    }
    if(y===undefined){
        y=4
    } return x * y;
} console.log(multiplyFunction(2));
console.log(multiplyFunction())



function addFunction(x=1, y=3, z=6){
    return x+y+z
}
console.log(addFunction(6))
console.log(addFunction())

// function sum (a=6,b=10){
//  let result= a/b*100;
//  console.log(result,"%")

// } let value=sum()
// console.log(value)

//  const display=() => {
// console.log("areeba")
// }
// display(sum())

function nice(name){
    console.log("hi " + name+ "you are looking nice")
    console.log("hi "  +  name + "your shirt is good")
} nice("areeba")


const number=(x)=>{
    console.log("i am the arrow function", x)
}
number(7)
number(8)
number(89)
// function 
//function are reusable block of code to perfom particular task
//The name you write inside the function definition is called a Parameter.
// The value you send when you call the function is called an Argument.

