// Modern JavaScript ES6

// Spread Operator
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr  = [...arr1, ...arr2]
//console.log(arr)

// Rest Parameter (sending multiple indefinte parameter), works as array
function showNumber(...num){
    for(let i of num){
        console.log(i)
    }
}
//showNumber(1, 2, 3, 4)

// Dynamic Function, Anonymus function
let addTwoNum = function(a, b){
    let sum = a + b
    console.log(sum)
}
//addTwoNum(10,5)
// sort form of above code (Arrow Function)
var addTwoNumber = (a, b) => {
    console.log(a + b)
}
//addTwoNumber(5,6)
    


// varible hoisting, means works first, then declare or vica versa, applicable for var
a = 10
b = 15
//console.log(a+b)
var a, b


// multidimensional array
var ar1 = [1]
var ar2 = [2]
var ar3 = [3]
var ar = [ar1, ar2, ar3]
//console.log(ar)


// Array destructuring
const myArray = [1,2,3]
const [x, y, z] = myArray
//console.log(y);
const myObject = {fname: 'John', lname: 'Doe'}
const {fname, lname} = myObject
console.log(fname)
