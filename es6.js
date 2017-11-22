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
        this.age = 0;
    }

    birthday() {
        setTimeout(() => {
            this.age++
        }, 1000)
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


// now i will decide what is this!
// this will equal window
arg1 => 10

this === window

function sayHello(){
    console.log(this);
}

// what is this?
// to whom does say hello belong to
// this is window
// sending window as this to sayhello
sayHello()

// what is this?
// to whom does say hello belong to
// this == {a: sayHello}
// sending this
{a : sayHello}





() => {
    console.log(this) // (function sayHello(){console.log(this)}).bind(this)
}


const myDict1 = {'a': sayHello}

// this == window
const myDict2 = {'a': () => {console.log(this)}}

myDict1['a']();
myDict2['a']();





















































