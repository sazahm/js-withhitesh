function myName() {
    console.log("S");
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("D");
    
}

// myName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(3,4)

const result = addTwoNumbers(3,4)

// console.log("Result:", result);

function loginUserMessage(username = "Saz") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sajid"))
// console.log(loginUserMessage("Sajid"))

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(2,6,9));

const user = {
    username: "sajid",
    price: 69
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "saz",
    price: 420
})

const myArray = [2,4,6,8]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([4,2,6,8]));
