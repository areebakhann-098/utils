let students = ["areeba", "huzaifa", "falak", "shafak", "usman niaz swati", "imran", "zain", 
    "ayesha", "ali", "copycat", "husnain", "anaya" ]

    let houses= []
    for (const student of students) {
        if(student.length < 6){
            houses.push("red house")
        }
        else if(student.length<8){
            houses.push("blue house")
        }
        else if(student.length<12){
            houses.push("black house")
        }
else{
    houses.push("white house")
}
    }
    console.log(houses)

    // The Double Trouble: You are tasked with writing a function that doubles each element in an array. 
    // However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
    function doubleUniqueConsecutive(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // agar previous element same nahi → double
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        } else {
            // consecutive duplicate → just push original
            result.push(arr[i]);
        }
    }

    return result;
}

// Test
let arr = [1, 2, 2, 3, 3, 3, 4];
console.log(doubleUniqueConsecutive(arr));

//The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. 
// Write a function that appends the reversed version of the original string to itself.
function stringRevered(str){
    let reversed = str.split('').reverse().join('');
    return str+ reversed

}
let result= stringRevered("areeba")
console.log(result)

//The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long,
// contains both uppercase and lowercase letters, and includes at least one digit.
function validationPassword(password){
    if(password.length<8){
        return "Password must be at least 8 characters long";
    }
    if(!/[A-Z]/.test(password)){
                return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)){
                return "Password must contain at least one lowercase letter";

    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number";
    }
     if (!/[@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Password must contain at least one specaial character";
    }
    return "invalid password"
}
console.log(validationPassword("H$ellow1"))
console.log(validationPassword("Hellow&23"))
console.log(validationPassword("hellow"))
console.log(validationPassword("HELLO123"))
console.log(validationPassword("Ara123d@")); 

//You need to create a function that counts 
// the number of vowels in a given string. Consider both uppercase and lowercase vowels.
 function vowelsstring(str){
    let lwrvowels= "aeiouAEIOU";
let count = 0;
for (const char of str) {
    if(lwrvowels.includes(char)){
        count++
    }
}
     return count
   
 }
 console.log(vowelsstring("usman niaz swati"))






