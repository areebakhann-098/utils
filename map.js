//    let number=[2,3,4,5,6]
//     let doubled= number.map(num => num*2)
//     console.log(doubled)

// const person = [
//     { name: "areeba khalid", age: 24 },
//     { name: "huzaifa sajid", age: 25 }
// ];

// const details = person.map(person => `${person.name} is ${person.age} years old`);
// console.log(details);


// //     //check find name 
//     const users=[
//         {name: "areeba", age: 23},
//         {name: "ayesha", age: 26}
//     ];

//     const names= users.map(user=>user.name);
//     console.log(names)

    // let fruits=["apple", "banana", "mango"];
    // let upperFruits=fruits.map(f=> f.toUpperCase());
    // console.log(upperFruits)

//     //index with value using map()
// let arr=[10, 20, 30, 40];
// let withIndex= arr.map((value, index)=>{
//     return `index ${index}= ${value}`
// });
// console.log(withIndex)


// //     //reduce
    // const nums=[1,2,3,4]
    // const sum=nums.reduce((total,n)=>total+n);
    // console.log(sum)

    // const numms=[1,2,3,4]
    // const total=numms.reduce((acc, curr)=>{
    //     return acc+curr
    // },0);
    // console.log(total)

//     // find maximum number
    // let numberss=[10,30,40,90,5]
    // let maxNumber =numberss.reduce((acc, curr)=>{
    //     return acc > curr ? acc: curr;
    // },0);
    // console.log(maxNumber)


let arr = [
    [10, 20, 30],[40, 50, 60],[70, 80, 90]
];

let totall= arr.reduce((outerAcc, innerArr)=>{
    return outerAcc+ innerArr.reduce((innerAcc, num)=> innerAcc+num, 0)
}, 0);
console.log(totall)

//filter

// let number=[1,2,3,4,5,6,7,8,9,10]
// let evenNumbers= number.filter((n) => n%2===0)
// let oddNumbers= number.filter((n) => n%2===1)
// let maxNumber= number.reduce((acc, curr)=>{
//     return acc> curr? acc: curr
// },0)
// console.log(maxNumber)
// console.log(oddNumbers)
// console.log(evenNumbers)

