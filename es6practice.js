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
//    lastName = 'Islam'
//let lastName = 'Islam' // error

// const => cant reassign value or redeclare 
const mobile = '123';
//    mobile = 455;
//const mobile = 123;// error


// for in loop
const bill = {
    name: 'Billgates',
    city: 'USA',
    color: 'White',
    wearingGlass: true
}
for (let props in bill ){
    //console.log(props + 'is: ' + bill[props]);
}

// Anonymous function
var greet = function(){
    return 'Hi';
}
// can be re assign
var greet = function(){
    return 'Hi Again';
}
//console.log(greet());


// Arrow function
var myArrow = (a, b, ...num) => {
    return num // return value as anonymus function not as a arrow functin
}
//console.log(myArrow(1,2,3,4,5))

// array destructuring
const country = ['Bangladesh', 'Nepal', 'Canada'];
//const [b, n, c] = country;
const [, , c] = country;
//console.log(c);

// ##################################################### array map ############################
var myMap = new Map();
myMap.set('b', 'Bangladesh')
myMap.set('c', 'Canada')
myMap.set('d', 'Dubai')

//console.log(myMap.keys());// print keys
//console.log(myMap.values());// print values

for(let myValue of myMap.values()){
    //console.log(myValue)
}
for(let myKey of myMap.keys()){
    //console.log(myKey)
}
// delete(key), , has(key)
myMap.delete('d') // delete pair by key
for(let myValue of myMap.values()){
    //console.log(myValue)
}
// clear()
//myMap.clear()
for(let myValue of myMap.values()){
    //console.log(myValue) // delete all pairs, hence no output
}
//get(key)
//console.log(myMap.get('b'))

// has(key)
if(myMap.has('bb')){
    //console.log('Yes')
}else{
    //console.log('No')
}
//console.log(myMap.size)
// ################################################# end of map ####################################


// ################################################# array set #####################################
const mySet = new Set();
mySet.add('Dhaka');
mySet.add('Barisal');
mySet.add('Cumilla');
mySet.add('Dinajpur');
//console.log(mySet) // return data as collection of unique property of object


// delete value
//mySet.delete('Barisal');
//console.log(mySet) 

// clear all values
//mySet.clear();
//console.log(mySet) 

// has(value)
// if(mySet.has('Dhaka')){
//     console.log('yes')
// }else{
//     console.log('no')
// }

// get size
//console.log(mySet.size)

//console.log(mySet.values())

// ################################################# end of array set ##############################














