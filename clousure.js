// function returnFunc(){
//     const x= ()=>{
//         let a=1
//         console.log(a)
//         const y=()=>{
//             let b= 2
//             console.log(a)
//             const z=()=>{
//                 let c=3
//                 console.log(a)

//             }
//             z()
//         }
//         a=999
//         y()
//     }
// return x
// }
// let a = returnFunc()
// a()

// function outer(){
//     let name= "areeba"
//      function inner(){
// console.log(`hello i am ${name}`)
//      }
//      return inner
// }


// let greet=outer()
// greet()

function outer(){
    let name="areeba"

const inner = ()=>{
console.log(`hi ${name}`)

}
return inner
}
let display=outer();
display()