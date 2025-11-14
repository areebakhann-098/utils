// function 
//function are reusable block of code to perfom particular task
//The name you write inside the function definition is called a Parameter.
// The value you send when you call the function is called an Argument.

//function declaration hoisted and we call it everywhere in the program
 function add(a,b){
    return a+b
 }
 console.log(add(1,2))

 //function expression not hoisted used const becoz of overwrite
 const sum= function(a,b){
    return a+b
 }
 console.log(sum(8,5))

//Arrow function short and c;ean syntax
const product = (a,b)=>{
return a*b
}
console.log(product(3,2))
//or we write also this short way if one line
 const multiply=(a,b) => a*b
 console.log(multiply(8,8))

 //anonynmous function used in callbacksand  not direct execution until call
setTimeout(function() {
  console.log(add(5, 9));
}, 2000);

 //invoke function automatically run on page load
(function(a, b) {
  console.log(a + b);
})(5, 5);

//callback function passed as an argument to another function, Common in arrays (map, filter, reduce)
function add(a, b) {
  return a + b;
}

function calculator(num1, num2, callbackFunction) {
  return callbackFunction(num1, num2);
}

const result = calculator(5, 50, add);

console.log(result); 

//constructor function used for new object
//new keyword used to create a new oject
//this keyword reffer to object which we create
function Adds(a, b) {
  this.result = a + b;
}

const obj = new Adds(50, 15);
console.log(obj.result); // 10



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

function sum (a=6,b=10){
 let result= a/b*100;
 console.log(result,"%")

} let value=sum()
console.log(value)

 const display=() => {
console.log("areeba")
}
display(sum())

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

