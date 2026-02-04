// stack (primitive); heap(non primitive)

let myGamingName = "Sajid"

let anotherName = myGamingName
anotherName = "Saz"

console.log(anotherName);
console.log(myGamingName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "saz@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)
