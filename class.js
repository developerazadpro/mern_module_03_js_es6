// static function call without creating object
class myClass {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    static myProfession(profession) {
        console.log('I am a ' + profession);
    }
    addNum(){
        let sum = this.num1 + this.num2;
        console.log(sum)
    }
}
//myClass.myProfession('Engr.');

// inheritence
class Parent {
    functionOne(){
        console.log('hello 1')
    }
    greet(){
        console.log('Hello')
    }
    sayHello(){
        console.log('Say Hello')
    }
}
class Child extends Parent {
    functionTwo(){
        console.log('hello 2')
    }
    // method overriding
    greet(name){
        console.log('Hello ' + name)
    }
    // call parent function into child class by super keyword
    demo(){
        super.sayHello();
    }

}
var obj = new Child();
obj.functionOne();
obj.functionTwo();
obj.greet('Azad');
obj.demo();

var arr1 = [1,2,3]
var arr2 = [...arr1, 4,5]
//arr2.push(4)
console.log(arr2)

var obj = {a:1, b:2}
//console.log(Object.keys(obj))