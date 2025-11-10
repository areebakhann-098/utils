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


