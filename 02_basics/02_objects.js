// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sajid",
    "full name": "Sajid Ahmed",
    [mySym]: "mykey1",
    age: 26,
    location: "Bangalore",
    email: "sajid@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "sajid@google.com"
// Object.freeze(jsUser)
jsUser.email = "sajid@yahoo.com"

// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// jsUser.greeting2 = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());


// const instaUser = new Object()

const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "saz"
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sajid",
            lastname: "ahmed"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "x", 4: "y"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email

// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js basics",
    price: "69",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //destructure

// console.log(courseInstructor);
console.log(instructor);

// {
//     "coursename": "js basics",
//     "price": "69"
//     "courseInstructor": "hitesh"
// }

[
    {},
    {},
    {}
]

