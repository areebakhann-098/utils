let x=10;
x+=5
console.log(x)

let y=20
y-=7
console.log(y)

let z=2
z*=5// short form / z=z*5
console.log(z)

let ab=4
ab/=5
console.log(ab)

let u="10"
let i=10
console.log(u==i)
console.log(u===i)

let aa="2"
let bb=2
console.log(aa!=bb)
console.log(aa!==bb)

let name1="8000"
let name2="809"
console.log(name1>=name2)
console.log(name1>name2 || name1<name2)

//task
let testName="bloodtest";
 if(testName==="sugar"){
    console.log("price is 200")

 }else if (testName==="blood test"){
    console.log("price of this test is 250")
 }else{
    console.log("price is 400")
 }

//task
let a=220, b=200, c=90
if(a===b && a===c && b===c){
    console.log("all number are equal")
}else if (a===b || a===c|| b===c){
    console.log("two number are equal")
}
else{
    console.log("all the numbers are not equal")
    if(a>b && a>c){
        console.log("a is greater", a)
    }
    else if(b>a && b>c){
        console.log("b is greater", b)
    } else{
       console.log("c is greater", c)
    }
}

//Task: Cave Entry
// let user=prompt("You are standing at the cave entrance. Do you want to go 'left' or 'right'?")
// if(user=="left"){
//     console.log("You found a sleeping dragon")
//    let action=prompt("Do you want to 'fight' or 'run'?")
//     if(action=="fight"){
//         console.log("Dragon burned you! Game Over ")
//     }else if(action=="run"){
//         console.log("You escaped safely and entered Level 2 ")
//     }
// }
// else if(user=="right"){
//     console.log("You fell into a trap hole! Game Over")
// }
// else{
//     console.log("game over")
// }
