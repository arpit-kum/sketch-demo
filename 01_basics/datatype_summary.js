
//dattype mainly two type 

//1. primitive datatype.   2.non-primitive datatype(reference).



// primitive datatype mainly seven types:-
//1.string
//2.Number
//3.Boolean
//4.NULL
//5.undefined
//6.symbol
//7.BigInt


const score = 100
const scpreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);
// const bigNumber = 2672634724760748378734698n

//reference(Non-primitive):-
//1.array
//2.objects
//3.functions

const heros = ["shaktiman","naagraj","doga"]; 
let myObj = {
    name: "Arpit",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof Arpit )