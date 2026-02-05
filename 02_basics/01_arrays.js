// Arrays

const myArr = [0,1,2,3,4,5]
const myArr2 = ["Superman", "Batman", "Spiderman"]
const myArr3 = new Array(1,2,3,4)

// console.log(myArr[0]);
// console.log(myArr2[2]);
// console.log(myArr3[3]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

// console.log(myn2);
// console.log("C ", myArr);

const marvelHeroes = ["Spiderman", "Ironman", "Thor"]
const dcHeroes = ["Superman", "Batman", "Flash"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes)

// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes);

const newArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableArr = newArray.flat(Infinity)
console.log(usableArr);


console.log(Array.isArray("Sajid"));
console.log(Array.from("Sajid"));
console.log(Array.from({name: "Sajid"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
