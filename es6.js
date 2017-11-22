/**
 * Created by yarivkatz on 22/11/2017.
 */

// variable declaration
// var let const

var myNumber = 10;

let myString = 'stam string';

const myBoolean = true;

for(var i = 0; i<10; i++) {
    for(var i = 0; i<10; i++) {
        console.log(i)
    }
}

for(let i = 0; i<10; i++) {
    for(let i = 0; i<10; i++) {
        console.log(i)
    }
}

//myBoolean = false;

const myArray = [];
myArray.push(1);



// class

class Person{
    constructor(firstName = 'Yariv', lastName = 'Katz') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade = 100) {
        super(firstName, lastName);
        this.grade = grade;
    }

    sayHello() {
        console.log('hello');
    }
}

// lambda functions

(arg1, arg2) => {
    console.log('hello')
}

(arg1, arg2) => arg1; // (arg1, arg2) => {return arg1}

arg1 => {console.log('sdfas')}

function sayHello(){
    console.log(this);
}


() => {
    console.log(this) // (function sayHello(){console.log(this)}).bind(this)
}


const myDict1 = {'a': sayHello}
const myDict2 = {'a': () => {console.log(this)}}

myDict1['a']();
myDict2['a']();






































