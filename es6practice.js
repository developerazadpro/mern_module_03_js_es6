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
