// Arrays and Method
let arr = [1, 2, 3, 4,5 ]
console.log(arr)
console.log(arr.length)
console.log(arr [1])
console.log(typeof arr)
console.log(arr.toString())
console.log(arr.join(" & "))
console.log(arr.pop())
arr.push("khalid")
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift("areeba")
console.log(arr)
delete arr[3]
console.log(arr)

let fruits=["mango", "grapes", "apple"]
let vegetables=["potato", "tomato" ,"onion"]
  let item=fruits.concat(fruits, vegetables)
  console.log(item)

  let number=[1,2,3,4,5]
  number.splice(1, 3, 77,88,99)
  console.log(number)

let a =[1,2,3,4,5,6,7,8,9]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
//for each
a.forEach((value, index) => {
    console.log(index,value)
    
});


//for in
let obj={
    a: 1,
    b:2,
    c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(key, element)}


//for of
for (const value of a) {
console.log(value)}



let arr0=[2,4,6,8,7,88]
let newArr=[];
for (let index = 0; index < arr0.length; index++) {
    const element = arr0[index];
    newArr.push(element**2)
}
console.log(newArr)

//map 
let newArray=arr0.map((e)=>{
    return e**2
})
console.log(newArray)


// //filter
const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
} 
console.log(arr0.filter(greaterThanSeven))

// // //reduce
let array=[1,2,3,4,5,6,7]

const red=(a,b)=>{
    return a+b
}
console.log(array.reduce(red))


// //TASK
let numbers=[1,2,3,4,5,6,7,8,9]
console.log(numbers[0])
console.log(numbers[8])
console.log(numbers.length)

// //Task 
let colors=["white", "green", "pink", "purple"]
colors.push("yellow")
console.log(colors)
colors.unshift("black")
console.log(colors)
colors.splice(2, 1)
console.log(colors)

// //Task
let Array=[10,20,30,40]
let sum=0;
for (let i = 0; i < Array.length; i++) {
sum=sum+Array[i]   
}
console.log(sum)

// //task
let username=["areeba", "huzaifa", "hamza","usman", "imran"]
username.pop()
console.log(username)
username.shift()
console.log(username)
username.unshift("ali")
console.log(username)
username.push("zain")
console.log(username)

// //TASK Conact 
let arr1=[1,2,3];
let arr2=[4,5,6];
let items=arr1.concat(arr2)
console.log(items)
//using spread operator
let result=[...arr1, ...arr2]
console.log(result)

// //task Reverse the array

let arr3=[1,2,3,4,5]
arr3.reverse()
console.log(arr3)
