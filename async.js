// console.timeLog("i am the developer")
// console.log("i am the programmer")
// setTimeout(()=>{
//  console.log("i am in the settimeout")
// }, 2000);
// console.log("hi i am areeba khalid")

// const { log } = require("async");

// //promises
// let prom1 = new Promise((resolve, reject) =>{
//     let a= Math.random();
//     if(a<0.5){
//         console.log("no random number was not supporting")
//     }else {
//  setTimeout(()=>{
//         console.log("hi i am a developer");
//         resolve("areeba")
//     },2000);
//     }
   
// });
// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
//Task
// let promise= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("hi how are you")
//         resolve("promise resolve")
//     }, 2000);
// })

// promise.then((a)=>{
//     console.log(a)
// })

//task
// let promise1= new Promise((resolve, reject)=>{
//     let b= Math.random();
//     if(b>0.5){
//         resolve("success")
//     }else{
//     reject("failed")
//     }
// });

// promise1.then((res)=>{
//     console.log(res)
// })
// promise1.catch((err)=>{
//     console.log(err)})

  //task
// let load= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("loading....")
//     }, 1000)
//      setTimeout(() => {
//             resolve("promise resolve")
//     }, 3000);
// });
// load.then((mesg)=>{
//     console.log(mesg)
// })

//task

// function getNumber(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//              let a= 2
//         resolve(a);
//         }, 2000);
//     });
// }
//     getNumber().then((mesg)=>{
//         console.log(mesg)
//     });

//     let number= new Promise((resolve, reject)=>{
//         resolve(10)
//     });
//     number
//     .then((num)=>{
//         return num*2
//     })
//     .then((num)=>{
//         return num+5
//     })
//     .then((final)=>{
//         console.log(final)
//     })

//     //task fetch fake api
//     let fetchUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: "Areeba", age: 21 });
//     }, 2000);
// });

// fetchUser.then((data) => {
//     console.log(data.age);
// });

// //task convert promise hell to promise channing
// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// wait(1000)
//     .then(() => {
//         console.log("1");
//         return wait(1000);
//     })
//     .then(() => {
//         console.log("2");
//         return wait(1000);
//     })
//     .then(() => {
//         console.log("3");
//     });



//task promise.all()
// let p1= new Promise((resolve, reject)=>{
// setTimeout(() => {
//     resolve("data1")
// }, 1000);
// });
// let p2= new Promise((resolve, reject)=>{
// setTimeout(() => {
//     resolve("data2")
// }, 1000);
// });
// Promise.all([p1,p2]).then((result)=>{
// console.log(result)
// })

//task
// function userLogin(username, password){
//   return  new Promise((resolve, reject)=>{
// if(username=="admin" && password==="123"){
//   resolve("login success")
// } else{
//   reject("login failed")
// }
//   });
// }
// userLogin("admin", "123")
// .then((msg)=>{console.log(msg)})
// .catch((err)=>{console.log(err)})


//async Await
// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await x.json();
//     console.log(x);
//     return data;
// }


// async function main() {
//     console.log("loading module");

//     let data = await getData(); 

//     console.log("data");
//     console.log(data);          
//     console.log("process data");
// }
// main();

//task
// async function getAllUser(){
//   try {
//        const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
//  const data = await response.json()
//  console.log(data)
//   } catch (error) {
//     console.log("E: ", err)
//   }
 
// }
// getAllUser() 


// //TASK 
// function wait(ms){
// return new Promise((resolve)=>{
// setTimeout(() => {
//   resolve("done")
// }, ms);
// });
// }

// async function main(){
// console.log("waiting...")
// let result= await wait(2000);
// console.log(result)
// }
// main()

//task fetch data from api
// async function getPostTitle(){
//   try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data= await response.json()
// console.log("title:", data.title)
//   } catch (error) {
//     console.log("error:", err)
//   }
// }
// getPostTitle()

//task json data 
// async function getUser(){
// return { id: 1, name: "areeba"}

// }
// async function get(){
//   const result= await getUser();
//   console.log(result)
// }
// get()

// //with .then method
// async function User(){
//   return {id: 1, name: "areeba khalid"}
// }
// User().then((msg)=>{
//   console.log(msg)
// })

// async function userData(){
//   return new Promise((resolve)=>{
//  resolve({id: 1, name: "areeba khalid awan"});
//   });
// };
// userData().then((data)=>{
//   console.log(data)
// })

// //task
// async function getdata(){
//   try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/404");


//         if(!response.ok){
//           throw new Error("failed to fetch");             
//         }
//  const data = await response.json();
//  console.log(data);

    
//   } catch (error) {
//     console.log("Error:",error.message)
//   }
// }
// getdata()


