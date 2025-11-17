

// class Animal{
//     constructor(name){
//         this.name=name
//         console.log("object is created")
//     }
// eats(){
//     console.log("eat")
// }
// jumps(){
//     console.log(" jump")
// }
// }
// let a= new Animal("bunny");
// console.log(a)

// // //this kyword in object

// let person={
//     name: "areeba",
//     age: 24,
//     greet: function(){
//          console.log(`hellow ${this.name}`)
//     }
// }
// person.greet()

// //this keyword in class
// class persons{
//     constructor(name){
//         this.name= name;
//     }
//     greet(){
//         console.log(`hellow ${this.name}`)
//     }
// }
// let p = new persons("areeba khalid");
// p.greet()

// // //extend keyword
// class Animal{
//     speak(){
//         console.log("animal is speaking")
//     }
// }
// class dog extends Animal{
//     bark(){
//         console.log("dog is barking")
//     }
// }
// const d= new dog();
// d.speak()
// d.bark()

// //super keyword

// class Animal{
// constructor(name, age){
//     this.name=name;
//     this.age=age
// }
// speak(){
//     console.log(`${this.name} is speaking `)
// }
// }
// class dog extends Animal{
//     constructor(name, age, breed){
//         super(name,age);
//         this.name= name
//     }
//     bark(){
//         console.log( this.name, "is barking  ")
//     }
// }
// const d= new dog("tonny", "buddy")
// d.speak();
// d.bark()

// //another example
// class Animals {
//   speak() {
//     console.log("Animal speaking");
//   }
// }

// class Dog extends Animals {
//   speak() {
//     super.speak(); // parent method call
//     console.log("Dog barking");
//   }
// }

// const e = new Dog();
// e.speak();



// //instance of operator
// class man{}
// let user=new man()
// console.log(user instanceof man)

// //another
// class animals{}
// class cat extends animals{}
// let a= new cat()
// console.log(a instanceof animals)
// console.log(a instanceof cat)

// //closure
// function init(){
//   let name="areeba khalid"
//   function displayName()
// {
//   console.log(name)
// }
// return displayName

// }
// let c= new init()
// c()

//another example
// function returnfunc(){


// const x = ()=>{
//   let a=1
//   console.log(a)
//   const y=()=>{
//     let a=2
//     console.log(a)
//     const z=()=>{
// let a=3
// console.log(a)
//     }
// z()
//   }
//   y()

// }
// return x
// }
// let a=returnfunc()
// a()