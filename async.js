console.timeLog("i am the developer")
console.log("i am the programmer")
setTimeout(()=>{
 console.log("i am in the settimeout")
}, 2000);
console.log("hi i am areeba khalid")

//promises
let prom1 = new Promise((resolve, reject) =>{
    let a= Math.random();
    if(a<0.5){
        console.log("no random number was not supporting")
    }else {
 setTimeout(()=>{
        console.log("hi i am a developer");
        resolve("areeba")
    },2000);
    }
   
});
prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})