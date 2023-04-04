// use of strict mode
"use strict"
function MyName(){
    let myName = 'Azharul'
    return myName
}
//console.log(MyName())

// Spread Operator
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr  = [...arr1, ...arr2]

// array push in array
arr1.push(arr2)
//console.log(arr1)

// rest parameter
function sum(a, b, ...num){
    let sum = 0;
    for(let i of num){
        sum += i
    }
    return sum + a + b
}
//console.log(sum(100,200, 1,2,3,4,5))

// var, let, const
// var => can reassign and redeclare
var firstName = 'Azharul'
    firstName = 'Azad'
var firstName = 'Md';
// let => can reassign value but can't redeclare
let lastName = 'Islam'
    lastName = 'Islam'
//let lastName = 'Islam' // error

// const => cant reassign value or redeclare 
const mobile = '123';
    mobile = 455;
//const mobile = 123;// error
