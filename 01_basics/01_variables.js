const accoundId = 19287
let accountEmail = "sajid@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"

// accoundId = 2

accountEmail = "abc@gmail.com"
accountPassword = "123"
accountCity = "Guwahati"
let accountState;

console.log(accoundId);

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accoundId,accountEmail,accountPassword,accountCity,accountState])