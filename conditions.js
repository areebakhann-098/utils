let age=5;
if(age<18){
    console.log("you can drive")
}
else{
    console.log("you cannot drive")   
}  
if(age==18){
     console.log("you can drive")
}
else{
    console.log("you cannot drive")   
}  


// let a=4
let b=2
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a/b)
console.log(a  % b)

// // Task
 let ab=20, bc=20
 let ca="90"
console.log(ab!=bc)
console.log(ab===bc)
console.log(ab!==ca),
console.log(ab==bc && bc==ab)

// // Task
let units=155
if(units<=100){
    let price=40
    let bill=units*price
    console.log("units price is 40", bill)
}else{
    let price=55
console.log("unitss price is 55", unit*price)
}

// // Task
let userAge = 24
if(userAge>=18){
    console.log("you are eligible to vote")
}else{
    console.log("you are not eligiable")
}

// // Task
let aaa=30
if(aaa%2===0){
    console.log("a is even number")
}else{
    console.log("odd number")
}

// // Task
let numbers=90
if(numbers>=90 && numbers<=100){
    console.log("Grade A")
}else if(numbers>=80 && numbers<=89){
    console.log("grade B")
}else if (numbers>=70 && numbers<=79){
    console.log("grade c")
}else if
    (numbers>=60 && numbers<=69){
        console.log("grade D")
    }else
    {
        console.log("fail")
    }


// // task Using ternary operator
let marks = 85;
let grade =
  marks >= 90 ? "Grade A" :
  marks >= 80 ? "Grade B" :
  marks >= 70 ? "Grade C" :
  marks >= 60 ? "Grade D" :
  "Fail";
console.log(grade);

// // using function
function studentGrade(marks){
    if (marks>=90)return "grade A";
    if (marks>=80)return "grade B";
    if (marks>=70)return "grade C";
    if (marks>=60)return "grade D";
return "fail"

}
console.log(studentGrade(70));



// task 
let a=10, b=20, c=4
if(a>b && a>c){
    console.log(" a is greater")
} else if(b>a && b>c){
    console.log("b is grater")
}else{
    console.log("c is greater")
}



// Task
let unit=100;
let totalbill;
let priceperunit;

if(unit<=100){
    priceperunit=10
}else if(unit<=250){
    priceperunit=15
}else{
    priceperunit=20
}

totalbill= unit*priceperunit
console.log("units", unit)
console.log("priceperunit", priceperunit)
console.log("bill", totalbill)

// task
let year = 2100
if((year % 4 ===0 && year % 100 !==0) || year % 400 ===0){
    console.log("leap year", year)
}else{
    console.log("is not a leap year")
}


