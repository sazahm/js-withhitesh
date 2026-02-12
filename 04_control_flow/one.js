// if

const isUserLoggedIn = true
const temperature = 51

// if ( temperature < 50 ){
//     console.log("less than 50");
    
// } else{
//     console.log("temp is more than 50");
// }

// <,>,<=,>=,==,!=,===,!==

const score = 200

// if (score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 69

// if (balance > 50) console.log("test"), console.log("test2");

// if (balance<50){
//     console.log("less than 50");
// }else if (balance<65){
//     console.log("less than 65");
// }else{
//     console.log("less than 100");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allowed to buy");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}