// // // for loop
// // let v=1
// // for(i=0; i<=1000; i++
// // ){
// //     console.log(v+i)
// // }

// // // //for in loop
// let obj={ 
//     name: "areeba",
//     role: "programmer",
//     company: "robotics",
// }
//     for (const key in obj) {
//         const element = obj[key];
//         console.log(key, element) 
//     }


// // //for of loop
   for (const a of "areeba") {
    console.log(a)
   }
   
//    //while loop
//    let i=5
//    while(i<7){
//     console.log(i);
//     i++
//    }
   
// //    //do while loop
//    let a=10
//    do{
//         console.log(a)
//         a++
//     }while(a>6)
   
// //         // task 1// Print Even Numbers 2–20
        // for (i=0; i<=20;i++){
        //     if(i % 2==1){
        //         console.log(i)
        //     }
        // }
        // //or
        // for(i=1; i<=20;i+=2)//i=i+2
        // {
        //     console.log(i)
        // }

// //         // Task 2 for odd number
// for(i=1;i<=20;i+=2){
//     console.log(i)
// }

// // // task 3 print 1 to 5 using while loop
// let i=1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// // //TASK 4: Sum of First 10 Numbers 12=3 3 4 5678910
// let sum=0
// for(i=0;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum)

// // // TASK 5: Factorial of a Number 5!= 5*4*3*2*1
// let factorial=1;
// for(i=1;i<=5;i++){
//     factorial=factorial*i 

// }
// console.log(`factorial of 5 is: ${factorial}`)

// // // TASK 6: Print Multiplication Table
// let num=7;
// for(i=1;i<=10; i++)
//     {
//     console.log(num*i)
// }


// // // TASK 7: Sum of Even Numbers between 1–50 using while loop

// let sum=0;
// let i=0
// while(i<=50){
//     if(i % 2==0){
//  sum=sum+i 
// }
//   i++}
// console.log(sum)
 
// //  // TASK 8: Sum of Even Numbers between 1–50 using for loop
//  let add=0;
//  for(i=0;i<=50;i++){
//     if(i%2==0){
//         add=add+i
//     }  
//  }
//  console.log(add)


// // // TASK 9: Reverse Numbers Use for loop Print numbers 10 to 1

// for(i=10; i>=0;i--)
//     {
//     console.log(i)
// }
//             // TASK 10: Multiplication Table of 1–5
// for(let i=1; i<=5; i++){
//     console.log(` table of ${i}`);
//     for(let j=1; j<=10; j++){
//         console.log(`${i} * ${j}= ${i*j}`)
//     }
// }



// let areeba=[22, 33,44,55]
// for (let index = 0; index < areeba.length; index++) {
//     const element = areeba[index];
//     console.log(element)
//     console.log(areeba.length)
// }
// console.log(areeba[1])

// let areeba={
//      height: 6,
//      weight: 83,
//      habits: "very good but.....",
//      nature: "excellent",
//      dream: "BMW",
//      fav_dish: "fish",
//      sweet: "kheer"
// }
// for (const key in areeba) {
//     const element = areeba[key];
//     console.log(key, element)
// }

// let obj={ name: "areeba", role: "programmer", company: "robotics"}
// let obj1={ name: "usman", role: "full stack devloper", company: "robotics-world" }
// if(obj.name=="areeba"){
// obj.sirname="usman niaz swati"
// console.log(obj)
// }if(obj1.name=="usman"){
//    delete obj1.company
//     console.log(obj1)
// } else 
//     console.log("thanks")