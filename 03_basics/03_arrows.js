const user = {
    username: "sajid",
    price: 69,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "saz"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "sajid"
//     console.log(this.username);
    
// }

// one()

// const one = function(){
//     let username = "sajid"
//     console.log(this.username);
// }

const one = () => {
    let username = "sajid"
    console.log(this.username);
}

// one()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({username: "sajid"})

console.log(addTwo(3,4));
