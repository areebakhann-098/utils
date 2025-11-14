// console.timeLog("i am the developer")
// console.log("i am the programmer")
// setTimeout(()=>{
//  console.log("i am in the settimeout")
// }, 2000);
// console.log("hi i am areeba khalid")

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
let p1= new Promise((resolve, reject)=>{
setTimeout(() => {
    resolve("data1")
}, 1000);
});
let p2= new Promise((resolve, reject)=>{
setTimeout(() => {
    resolve("data2")
}, 1000);
});
Promise.all([p1,p2]).then((result)=>{
console.log(result)
})